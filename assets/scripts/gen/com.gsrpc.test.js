

var ResourceError = {
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

module.exports.ResourceError = ResourceError

module.exports.RESTfull = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.Get = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.Put = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
    },
}

var TimeUnit = {
    
    Second : 0,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "Second";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Second":
             writer.WriteByte(0); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.TimeUnit = TimeUnit


var Duration = {
    __new :function() {
    
        this.Value = 0;
    
        this.Unit = "Second";
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Value = reader.readInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Unit = TimeUnit.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(2);
    
        writer.writeByte(Tag.I32);
        writer.writeInt32(this.Value);
    
        writer.writeByte(Tag.I8);
        TimeUnit.__write(writer,this.Unit);
    
    },
}

module.exports.Duration = Duration

module.exports.RESTful = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.Post = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.Get = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
        this.SayHello = function(arg0) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 2;
        }
        
    },
}


var Block = {
    __new :function() {
    
        this.Content = [];
    
        this.KV = [];
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Content = reader.readBytes();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = 128;

		this.KV = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = [];

			var max4 = 12;

			v3 = [];

			for(var i4 = 0; i4 < max4; i4 ++ ){

				var v4 = {};

				v4 = new KV.__read(reader);

				v3[i4] = v4;

			}

			this.KV[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(2);
    
        writer.writeByte(((Tag.I8 << 4)|Tag.List));
        writer.writeBytes(this.Content);
    
        writer.writeByte(((((Tag.Table << 4)|Tag.List) << 4)|Tag.List));
        writer.writeUInt16(this.KV.length);

		for(var v3 = 0; v3 < this.KV.length; v3++){

			writer.writeUInt16(this.KV[v3].length);

			for(var v4 = 0; v4 < this.KV[v3].length; v4++){

				KV.__write(writer,this.KV[v3][v4]);

			}

		}
    
    },
}

module.exports.Block = Block


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


var KV = {
    __new :function() {
    
        this.Key = "";
    
        this.Value = "";
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Key = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Value = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        

        for(var i = 0; i < __fields; i ++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write:function(writer,val) {
        writer.writeByte(2);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Key);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Value);
    
    },
}

module.exports.KV = KV


var NotFound = {
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

module.exports.NotFound = NotFound
