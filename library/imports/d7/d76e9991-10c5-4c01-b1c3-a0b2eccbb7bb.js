var KV = require("./com.gsrpc").KV;

var EvtRPC = {
    __new: function __new() {

        this.Trace = 0;

        this.ID = 0;

        this.Prev = 0;

        this.Probe = "";

        this.StartTime = {};

        this.EndTime = {};

        this.Attributes = [];
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Trace = reader.readUInt64();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.ID = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Prev = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Probe = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.StartTime = new Time.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.EndTime = new Time.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.Attributes = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new KV.__read(reader);

                this.Attributes[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
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
        Time.__write(writer, this.StartTime);

        writer.writeByte(Tag.Table);
        Time.__write(writer, this.EndTime);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.Attributes.length);

        for (var v3 = 0; v3 < this.Attributes.length; v3++) {

            KV.__write(writer, this.Attributes[v3]);
        }
    }
};

module.exports.EvtRPC = EvtRPC;