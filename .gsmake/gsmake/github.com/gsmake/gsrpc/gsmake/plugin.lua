local fs        = require "lemoon.fs"
local sys       = require "lemoon.sys"
local class     = require "lemoon.class"
local throw     = require "lemoon.throw"
local filepath  = require "lemoon.filepath"
local logger    = class.new("lemoon.log","gsmake")

local langdir   = {
    golang = ".gsmake/golang/src";
}

task.resources = function(task)
    gsrpc = task.Owner.Properties.gsrpc or {}

    if gsrpc.name == nil then
        gsrpc.name = "github.com/gsrpc/gsrpc"
    end

    if gsrpc.lang == nil then
        gsrpc.lang = "golang"
    end

    if gsrpc.outputdir == nil then
        gsrpc.outputdir = langdir[gsrpc.lang]

        if gsrpc.outputdir == nil then
            gsrpc.outputdir = ".gsmake/gslang/src"
        end
    end

    defaultversion = task.Owner.Loader.Config.DefaultVersion

    if gsrpc.version == nil then
        gsrpc.version = defaultversion
    end

    print(string.format("prepare gsrpc compiler [%s:%s] ...",gsrpc.name,gsrpc.version))

    sync = task.Owner.Loader.Sync

    local path = sync:sync(gsrpc.name,gsrpc.version)

    gsrpcpath = filepath.join(task.Owner.Loader.Temp,"gsrpc")

    if not fs.exists(gsrpcpath) then
        fs.mkdir(gsrpcpath)
    end

    local loader = class.new("gsmake.loader",task.Owner.Loader.GSMake,path)
    loader:load()
    loader:setup()
    loader:run("install",gsrpcpath)
end
task.resources.Desc = "prepare gsrpc compiler"


local loadedpackages    = {}
local loadstack         = {}
local linkdependencies  = nil

linkdependencies = function(sync,dependencies)

    for _,dep in ipairs(dependencies) do

        if not dep.version then dep.version = defaultversion end

        if loadedpackages[dep.name] then
            if loadedpackages[dep.name].version ~= dep.version then
                print(string.format("conflict package(%s) version",dep.name))
                print("one :")
                for i,stack in ipairs(loadstack) do
                    print(string.format("%s%s->",string.rep(" ",i),stack.Name))
                end

                print("two :")
                for i,stack in ipairs(loadedpackages[dep.name].stack) do
                    print(string.format("%s%s->",string.rep(" ",i),stack.Name))
                end

                return true
            end
        end

        local path = sync:sync(dep.name,dep.version)

        local linked = filepath.join(gsrpcpath,"src",dep.name)

        if not fs.exists(filepath.dir(linked)) then
            fs.mkdir(filepath.dir(linked),true)
        end

        if fs.exists(linked) then
            fs.rm(linked)
        end

        local package = class.new("gsmake.loader",loader.GSMake,path,dep.name,dep.version).Package

        if not package.External then
            table.insert(loadstack,package)
            local properties  = package.Properties.gsrpc or {}
            if linkdependencies(package.Loader.Sync,properties.dependencies or {}) then
                return true
            end
            table.remove(loadstack)
        end

        loadedpackages[dep.name] = { version = dep.version; stack = class.clone(loadstack); }

        fs.symlink(path,linked)
    end

end


task.precompile = function(task)
    table.insert(loadstack,task.Owner)

    if linkdependencies(sync,gsrpc.dependencies or {}) then
        return true
    end

    local srcpath = filepath.join(gsrpcpath,"src")

    local srcfiles = {}

    fs.match(srcpath,"[^.]*%.gs",{".gsmake"},function(path)
        path = filepath.toslash(filepath.clean(path))
        table.insert(srcfiles,path)
    end)

    fs.match(task.Owner.Path,"[^.]*%.gs",{".gsmake"},function(path)
        path = filepath.toslash(filepath.clean(path))
        table.insert(srcfiles,path)
    end)

    local path      = filepath.join(gsrpcpath,"bin/gsrpc" .. sys.EXE_NAME)
    local outputdir = filepath.join(task.Owner.Path,gsrpc.outputdir)

    local exec = sys.exec(path)

    if 0 ~= exec:run("-lang",gsrpc.lang,"-o",outputdir,table.unpack(srcfiles)) then
      return true
    end
end
task.precompile.Desc = "compile the gsrpc files"
task.precompile.Prev = "resources"
