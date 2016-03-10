
var Code = {
    
    Heartbeat : 0,
    
    WhoAmI : 1,
    
    Request : 2,
    
    Response : 3,
    
    Accept : 4,
    
    Reject : 5,
    
    Tunnel : 6,
    
    TunnelWhoAmI : 7,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "Heartbeat";
        
        case 1:
            return "WhoAmI";
        
        case 2:
            return "Request";
        
        case 3:
            return "Response";
        
        case 4:
            return "Accept";
        
        case 5:
            return "Reject";
        
        case 6:
            return "Tunnel";
        
        case 7:
            return "TunnelWhoAmI";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Heartbeat":
             writer.WriteByte(0); 
        
        case "WhoAmI":
             writer.WriteByte(1); 
        
        case "Request":
             writer.WriteByte(2); 
        
        case "Response":
             writer.WriteByte(3); 
        
        case "Accept":
             writer.WriteByte(4); 
        
        case "Reject":
             writer.WriteByte(5); 
        
        case "Tunnel":
             writer.WriteByte(6); 
        
        case "TunnelWhoAmI":
             writer.WriteByte(7); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.Code = Code


var Request = {
    __new :function() {
    
        this.ID = 0;
    
        this.Service = 0;
    
        this.Method = 0;
    
        this.Params = [];
    
        this.Trace = 0;
    
        this.Prev = 0;
    
    },

    __read:function(reader) {
    
        this.ID = reader.readUInt32();
    
        this.Service = reader.readUInt16();
    
        this.Method = reader.readUInt16();
    
        var max3 = reader.readUInt16();

		this.Params = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Param.__read(reader);

			this.Params[i3] = v3;

		}
    
        this.Trace = reader.readUInt64();
    
        this.Prev = reader.readUInt32();
    
    },

    __write:function(writer,val) {
    
        writer.writeUInt32(this.ID);
    
        writer.writeUInt16(this.Service);
    
        writer.writeUInt16(this.Method);
    
        writer.writeUInt16(this.Params.length);

		for(var v3 = 0; v3 < this.Params.length; v3++){

			Param.__write(writer,this.Params[v3]);

		}
    
        writer.writeUInt64(this.Trace);
    
        writer.writeUInt32(this.Prev);
    
    },
}

module.exports.Request = Request

var ArchType = {
    
    X86 : 0,
    
    X64 : 1,
    
    ARM : 2,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "X86";
        
        case 1:
            return "X64";
        
        case 2:
            return "ARM";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "X86":
             writer.WriteByte(0); 
        
        case "X64":
             writer.WriteByte(1); 
        
        case "ARM":
             writer.WriteByte(2); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.ArchType = ArchType


var UnmarshalException = {
    __new :function() {
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(0);
    
    },
}

module.exports.UnmarshalException = UnmarshalException


var Time = {
    __new :function() {
    
        this.Second = 0;
    
        this.Nano = 0;
    
    },

    __read:function(reader) {
    
        this.Second = reader.readUInt64();
    
        this.Nano = reader.readUInt64();
    
    },

    __write:function(writer,val) {
    
        writer.writeUInt64(this.Second);
    
        writer.writeUInt64(this.Nano);
    
    },
}

module.exports.Time = Time

var Tag = {
    
    I8 : 0,
    
    I16 : 1,
    
    I32 : 2,
    
    I64 : 3,
    
    List : 4,
    
    Table : 5,
    
    String : 6,
    
    Skip : 7,
    

    __read : function(reader){
        var code =  reader.readUInt32(); 

        switch(code)
        {
        
        case 0:
            return "I8";
        
        case 1:
            return "I16";
        
        case 2:
            return "I32";
        
        case 3:
            return "I64";
        
        case 4:
            return "List";
        
        case 5:
            return "Table";
        
        case 6:
            return "String";
        
        case 7:
            return "Skip";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "I8":
             writer.WriteUInt32(0); 
        
        case "I16":
             writer.WriteUInt32(1); 
        
        case "I32":
             writer.WriteUInt32(2); 
        
        case "I64":
             writer.WriteUInt32(3); 
        
        case "List":
             writer.WriteUInt32(4); 
        
        case "Table":
             writer.WriteUInt32(5); 
        
        case "String":
             writer.WriteUInt32(6); 
        
        case "Skip":
             writer.WriteUInt32(7); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.Tag = Tag


var Param = {
    __new :function() {
    
        this.Content = [];
    
    },

    __read:function(reader) {
    
        this.Content = reader.readBytes();
    
    },

    __write:function(writer,val) {
    
        writer.writeBytes(this.Content);
    
    },
}

module.exports.Param = Param


var Response = {
    __new :function() {
    
        this.ID = 0;
    
        this.Exception = 0;
    
        this.Content = [];
    
        this.Trace = 0;
    
    },

    __read:function(reader) {
    
        this.ID = reader.readUInt32();
    
        this.Exception = reader.readSByte();
    
        this.Content = reader.readBytes();
    
        this.Trace = reader.readUInt64();
    
    },

    __write:function(writer,val) {
    
        writer.writeUInt32(this.ID);
    
        writer.writeSByte(this.Exception);
    
        writer.writeBytes(this.Content);
    
        writer.writeUInt64(this.Trace);
    
    },
}

module.exports.Response = Response


var InvalidContract = {
    __new :function() {
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(0);
    
    },
}

module.exports.InvalidContract = InvalidContract

var State = {
    
    Disconnect : 0,
    
    Connecting : 1,
    
    Connected : 2,
    
    Disconnecting : 3,
    
    Closed : 4,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "Disconnect";
        
        case 1:
            return "Connecting";
        
        case 2:
            return "Connected";
        
        case 3:
            return "Disconnecting";
        
        case 4:
            return "Closed";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Disconnect":
             writer.WriteByte(0); 
        
        case "Connecting":
             writer.WriteByte(1); 
        
        case "Connected":
             writer.WriteByte(2); 
        
        case "Disconnecting":
             writer.WriteByte(3); 
        
        case "Closed":
             writer.WriteByte(4); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.State = State

var OSType = {
    
    Windows : 0,
    
    Linux : 1,
    
    OSX : 2,
    
    WP : 3,
    
    Android : 4,
    
    iOS : 5,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "Windows";
        
        case 1:
            return "Linux";
        
        case 2:
            return "OSX";
        
        case 3:
            return "WP";
        
        case 4:
            return "Android";
        
        case 5:
            return "IOS";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Windows":
             writer.WriteByte(0); 
        
        case "Linux":
             writer.WriteByte(1); 
        
        case "OSX":
             writer.WriteByte(2); 
        
        case "WP":
             writer.WriteByte(3); 
        
        case "Android":
             writer.WriteByte(4); 
        
        case "IOS":
             writer.WriteByte(5); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.OSType = OSType


var Device = {
    __new :function() {
    
        this.ID = "";
    
        this.Type = "";
    
        this.Arch = "X86";
    
        this.OS = "Windows";
    
        this.OSVersion = "";
    
        this.AppKey = "";
    
    },

    __read:function(reader) {
    
        this.ID = reader.readString();
    
        this.Type = reader.readString();
    
        this.Arch = ArchType.__read(reader);
    
        this.OS = OSType.__read(reader);
    
        this.OSVersion = reader.readString();
    
        this.AppKey = reader.readString();
    
    },

    __write:function(writer,val) {
    
        writer.writeString(this.ID);
    
        writer.writeString(this.Type);
    
        ArchType.__write(writer,this.Arch);
    
        OSType.__write(writer,this.OS);
    
        writer.writeString(this.OSVersion);
    
        writer.writeString(this.AppKey);
    
    },
}

module.exports.Device = Device


var RemoteException = {
    __new :function() {
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(0);
    
    },
}

module.exports.RemoteException = RemoteException


var Message = {
    __new :function() {
    
        this.Code = "Heartbeat";
    
        this.Agent = 0;
    
        this.Content = [];
    
    },

    __read:function(reader) {
    
        this.Code = Code.__read(reader);
    
        this.Agent = reader.readByte();
    
        this.Content = reader.readBytes();
    
    },

    __write:function(writer,val) {
    
        Code.__write(writer,this.Code);
    
        writer.writeByte(this.Agent);
    
        writer.writeBytes(this.Content);
    
    },
}

module.exports.Message = Message


var WhoAmI = {
    __new :function() {
    
        this.ID = {};
    
        this.Context = [];
    
    },

    __read:function(reader) {
    
        this.ID = new Device.__read(reader);
    
        this.Context = reader.readBytes();
    
    },

    __write:function(writer,val) {
    
        Device.__write(writer,this.ID);
    
        writer.writeBytes(this.Context);
    
    },
}

module.exports.WhoAmI = WhoAmI


var KV = {
    __new :function() {
    
        this.Key = [];
    
        this.Value = [];
    
    },

    __read:function(reader) {
    
        this.Key = reader.readBytes();
    
        this.Value = reader.readBytes();
    
    },

    __write:function(writer,val) {
    
        writer.writeBytes(this.Key);
    
        writer.writeBytes(this.Value);
    
    },
}

module.exports.KV = KV


var Tunnel = {
    __new :function() {
    
        this.ID = {};
    
        this.Message = {};
    
    },

    __read:function(reader) {
    
        this.ID = new Device.__read(reader);
    
        this.Message = new Message.__read(reader);
    
    },

    __write:function(writer,val) {
    
        Device.__write(writer,this.ID);
    
        Message.__write(writer,this.Message);
    
    },
}

module.exports.Tunnel = Tunnel


var NamedService = {
    __new :function() {
    
        this.Name = "";
    
        this.DispatchID = 0;
    
        this.VNodes = 0;
    
        this.NodeName = "";
    
    },

    __read:function(reader) {
    
        this.Name = reader.readString();
    
        this.DispatchID = reader.readUInt16();
    
        this.VNodes = reader.readUInt32();
    
        this.NodeName = reader.readString();
    
    },

    __write:function(writer,val) {
    
        writer.writeString(this.Name);
    
        writer.writeUInt16(this.DispatchID);
    
        writer.writeUInt32(this.VNodes);
    
        writer.writeString(this.NodeName);
    
    },
}

module.exports.NamedService = NamedService


var TunnelWhoAmI = {
    __new :function() {
    
        this.Services = [];
    
    },

    __read:function(reader) {
    
        var max3 = reader.readUInt16();

		this.Services = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new NamedService.__read(reader);

			this.Services[i3] = v3;

		}
    
    },

    __write:function(writer,val) {
    
        writer.writeUInt16(this.Services.length);

		for(var v3 = 0; v3 < this.Services.length; v3++){

			NamedService.__write(writer,this.Services[v3]);

		}
    
    },
}

module.exports.TunnelWhoAmI = TunnelWhoAmI
