name "github.com/gsrpc/jsrpc"

plugin "github.com/gsmake/gsrpc"

properties.gsrpc = {
    lang        = "js";
    outputdir   = "assets/scripts/gen";

    dependencies = {
        { name = "bitbucket.org/gamedocker/gsgwent"  };
    }
}
