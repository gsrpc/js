var com_gsrpc_Time = require("./com.gsrpc").com_gsrpc_Time;


var EvtRPC = {
    __new :function() {
    
        this.Trace = 0;
    
        this.ID = 0;
    
        this.Prev = 0;
    
        this.Probe = "";
    
        this.StartTime = {};
    
        this.EndTime = {};
    
        this.Attributes = [];
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Trace = reader.readUInt64();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.ID = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Prev = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Probe = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.StartTime = new com_gsrpc_Time.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.EndTime = new com_gsrpc_Time.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.Attributes = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new com_gsrpc_KV.__read(reader);

			this.Attributes[i3] = v3;

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
        writer.writeByte(7);
    
        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Trace);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.ID);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.Prev);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Probe);
    
        writer.writeByte(Tag.Table);
        com_gsrpc_Time.__write(writer,this.StartTime);
    
        writer.writeByte(Tag.Table);
        com_gsrpc_Time.__write(writer,this.EndTime);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.Attributes.length);

		for(var v3 = 0; v3 < this.Attributes.length; v3++){

			com_gsrpc_KV.__write(writer,this.Attributes[v3]);

		}
    
    },
}

module.exports.EvtRPC = EvtRPC
