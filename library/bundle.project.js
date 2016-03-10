require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"com.gamedocker.gwent":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f06ed2iLHlAuog2ErWH120e', 'com.gamedocker.gwent');
// scripts\gen\com.gamedocker.gwent.js

var Device = require("./com.gsrpc").Device;

var DHKey = {
    __new: function __new() {

        this.P = "";

        this.G = "";
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.P = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.G = reader.readString();
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
        writer.writeByte(2);

        writer.writeByte(Tag.String);
        writer.writeString(this.P);

        writer.writeByte(Tag.String);
        writer.writeString(this.G);
    }
};

module.exports.DHKey = DHKey;

module.exports.UserBinder = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.BindUser = function (arg0, arg1, callback, timeout) {};

        this.UnbindUser = function (arg0, arg1, callback, timeout) {};
    }
};

module.exports.Auth = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.Login = function (arg0, arg1, callback, timeout) {};

        this.Logoff = function (arg0, callback, timeout) {};
    }
};

module.exports.Agent = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.GetPlayer = function (callback, timeout) {};

        this.StartBattle = function (arg0, callback, timeout) {};

        this.CancelBattle = function (arg0, callback, timeout) {};

        this.Play = function (arg0, arg1, arg2, callback, timeout) {};

        this.Surrender = function (arg0, callback, timeout) {};

        this.ResumeBattle = function (arg0, callback, timeout) {};

        this.DownloadCardTemplates = function (arg0, callback, timeout) {};

        this.CancelDownloadCardTemplates = function (arg0, callback, timeout) {};

        this.DownloadCards = function (arg0, callback, timeout) {};

        this.DownloadSkills = function (arg0, callback, timeout) {};

        this.CancelDownloadCards = function (arg0, callback, timeout) {};

        this.CardGroups = function (callback, timeout) {};
    }
};

module.exports.Client = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.OnBattleReport = function (arg0, callback, timeout) {};

        this.OnResumeBattle = function (arg0, arg1, callback, timeout) {};

        this.BeginBattle = function (arg0, arg1, callback, timeout) {};

        this.EndBattle = function (arg0, callback, timeout) {};

        this.BeginUpdateCardTemplates = function (arg0, callback, timeout) {};

        this.UpdateCardTemplates = function (arg0, arg1, callback, timeout) {};

        this.EndUpdateCardTemplates = function (arg0, callback, timeout) {};

        this.BeginUpdateCards = function (arg0, callback, timeout) {};

        this.UpdateCards = function (arg0, arg1, callback, timeout) {};

        this.EndUpdateCards = function (arg0, callback, timeout) {};

        this.BeginUpdateSkills = function (arg0, callback, timeout) {};

        this.UpdateSkills = function (arg0, arg1, callback, timeout) {};

        this.EndUpdateSkills = function (arg0, callback, timeout) {};

        this.OnTrickBegin = function (arg0, arg1, arg2, callback, timeout) {};

        this.OnPlayCard = function (arg0, arg1, callback, timeout) {};

        this.OnMoveCards = function (arg0, arg1, arg2, arg3, callback, timeout) {};

        this.OnUpdatePower = function (arg0, arg1, arg2, callback, timeout) {};

        this.OnAddSkill = function (arg0, arg1, arg2, arg3, callback, timeout) {};

        this.OnRemoveSkill = function (arg0, arg1, arg2, arg3, callback, timeout) {};

        this.OnTrickEnd = function (arg0, arg1, callback, timeout) {};
    }
};

var UserAuthFailed = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.UserAuthFailed = UserAuthFailed;

var UserAlreadyLogin = {
    __new: function __new() {

        this.Name = "";
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Name = reader.readString();
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
        writer.writeByte(1);

        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    }
};

module.exports.UserAlreadyLogin = UserAlreadyLogin;

var ResourceNotFound = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.ResourceNotFound = ResourceNotFound;

var SkillTarget = {

    LivingCard: 1,

    DeadCard: 2,

    HandCard: 4,

    DeckCard: 8,

    PlaySkill: 16,

    Self: 32,

    Enemy: 64,

    Tank: 128,

    Ship: 256,

    AirPlane: 512,

    Magic: 1024,

    __read: function __read(reader) {
        var code = reader.readUInt32();

        switch (code) {

            case 1:
                return "LivingCard";

            case 2:
                return "DeadCard";

            case 4:
                return "HandCard";

            case 8:
                return "DeckCard";

            case 16:
                return "PlaySkill";

            case 32:
                return "Self";

            case 64:
                return "Enemy";

            case 128:
                return "Tank";

            case 256:
                return "Ship";

            case 512:
                return "AirPlane";

            case 1024:
                return "Magic";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "LivingCard":
                writer.WriteUInt32(1);

            case "DeadCard":
                writer.WriteUInt32(2);

            case "HandCard":
                writer.WriteUInt32(4);

            case "DeckCard":
                writer.WriteUInt32(8);

            case "PlaySkill":
                writer.WriteUInt32(16);

            case "Self":
                writer.WriteUInt32(32);

            case "Enemy":
                writer.WriteUInt32(64);

            case "Tank":
                writer.WriteUInt32(128);

            case "Ship":
                writer.WriteUInt32(256);

            case "AirPlane":
                writer.WriteUInt32(512);

            case "Magic":
                writer.WriteUInt32(1024);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.SkillTarget = SkillTarget;

var Action = {

    __read: function __read(reader) {
        var code = reader.readUInt32();

        switch (code) {}

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.Action = Action;

var BattleType = {

    PVP: 0,

    PVE: 1,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 0:
                return "PVP";

            case 1:
                return "PVE";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "PVP":
                writer.WriteByte(0);

            case "PVE":
                writer.WriteByte(1);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.BattleType = BattleType;

var CardRarity = {

    Common: 0,

    Rare: 1,

    Ultra: 2,

    Legendary: 3,

    Epic: 4,

    Mythic: 5,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 0:
                return "Common";

            case 1:
                return "Rare";

            case 2:
                return "Ultra";

            case 3:
                return "Legendary";

            case 4:
                return "Epic";

            case 5:
                return "Mythic";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "Common":
                writer.WriteByte(0);

            case "Rare":
                writer.WriteByte(1);

            case "Ultra":
                writer.WriteByte(2);

            case "Legendary":
                writer.WriteByte(3);

            case "Epic":
                writer.WriteByte(4);

            case "Mythic":
                writer.WriteByte(5);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.CardRarity = CardRarity;

var Resource = {
    __new: function __new() {

        this.Name = "";

        this.From = 0;

        this.To = 0;
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.From = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.To = reader.readUInt32();
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
        writer.writeByte(3);

        writer.writeByte(Tag.String);
        writer.writeString(this.Name);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.From);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.To);
    }
};

module.exports.Resource = Resource;

var Skill = {
    __new: function __new() {

        this.ID = 0;

        this.Key = "";

        this.Name = "";

        this.Source = "Fighter";

        this.Group = false;

        this.Target = 0;

        this.Effect = "";

        this.EffectValue = 0;

        this.Description = "";

        this.AssetIcon = "";

        this.AssetAnimation = "";
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.ID = reader.readUInt16();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Key = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Source = CardType.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Group = reader.readBoolean();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Target = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Effect = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.EffectValue = reader.readInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Description = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.AssetIcon = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.AssetAnimation = reader.readString();
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
        writer.writeByte(11);

        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.ID);

        writer.writeByte(Tag.String);
        writer.writeString(this.Key);

        writer.writeByte(Tag.String);
        writer.writeString(this.Name);

        writer.writeByte(Tag.I8);
        CardType.__write(writer, this.Source);

        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Group);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.Target);

        writer.writeByte(Tag.String);
        writer.writeString(this.Effect);

        writer.writeByte(Tag.I32);
        writer.writeInt32(this.EffectValue);

        writer.writeByte(Tag.String);
        writer.writeString(this.Description);

        writer.writeByte(Tag.String);
        writer.writeString(this.AssetIcon);

        writer.writeByte(Tag.String);
        writer.writeString(this.AssetAnimation);
    }
};

module.exports.Skill = Skill;

var CardGroup = {
    __new: function __new() {

        this.Oid = 0;

        this.Cards = [];
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.Cards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = 0;

                v3 = reader.readUInt64();

                this.Cards[i3] = v3;
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
        writer.writeByte(2);

        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);

        writer.writeByte(Tag.I64 << 4 | Tag.List);
        writer.writeUInt16(this.Cards.length);

        for (var v3 = 0; v3 < this.Cards.length; v3++) {

            writer.writeUInt64(this.Cards[v3]);
        }
    }
};

module.exports.CardGroup = CardGroup;

var BattleState = {

    Creating: 1,

    Processing: 2,

    Win: 4,

    Failure: 8,

    Offline: 16,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 1:
                return "Creating";

            case 2:
                return "Processing";

            case 4:
                return "Win";

            case 8:
                return "Failure";

            case 16:
                return "Offline";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "Creating":
                writer.WriteByte(1);

            case "Processing":
                writer.WriteByte(2);

            case "Win":
                writer.WriteByte(4);

            case "Failure":
                writer.WriteByte(8);

            case "Offline":
                writer.WriteByte(16);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.BattleState = BattleState;

var CardTemplate = {
    __new: function __new() {

        this.ID = 0;

        this.CardID = 0;

        this.Type = "Fighter";

        this.Name = "";

        this.Job = "Tank";

        this.Race = "";

        this.Rarity = "Common";

        this.Grade = 0;

        this.Power = 0;

        this.Skills = [];

        this.Tradable = false;

        this.Evolvable = false;

        this.EvolveDrawing = {};

        this.EvolveMoney = 0;

        this.EvolveResources = [];

        this.RemoveGetDrawing = {};

        this.RemoveCostMoney = 0;

        this.RemoveGetResources = [];

        this.Description = "";

        this.Asset = "";

        this.Order = {};
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.ID = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.CardID = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Type = CardType.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Job = CardJob.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Race = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Rarity = CardRarity.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Grade = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Power = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.Skills = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new SetupSkill.__read(reader);

                this.Skills[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Tradable = reader.readBoolean();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Evolvable = reader.readBoolean();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.EvolveDrawing = new DrawingResource.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.EvolveMoney = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.EvolveResources = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Resource.__read(reader);

                this.EvolveResources[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.RemoveGetDrawing = new DrawingResource.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.RemoveCostMoney = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.RemoveGetResources = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Resource.__read(reader);

                this.RemoveGetResources[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Description = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Asset = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Order = new Order.__read(reader);
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
        writer.writeByte(21);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.ID);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.CardID);

        writer.writeByte(Tag.I8);
        CardType.__write(writer, this.Type);

        writer.writeByte(Tag.String);
        writer.writeString(this.Name);

        writer.writeByte(Tag.I8);
        CardJob.__write(writer, this.Job);

        writer.writeByte(Tag.String);
        writer.writeString(this.Race);

        writer.writeByte(Tag.I8);
        CardRarity.__write(writer, this.Rarity);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.Grade);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.Power);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.Skills.length);

        for (var v3 = 0; v3 < this.Skills.length; v3++) {

            SetupSkill.__write(writer, this.Skills[v3]);
        }

        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Tradable);

        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Evolvable);

        writer.writeByte(Tag.Table);
        DrawingResource.__write(writer, this.EvolveDrawing);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.EvolveMoney);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.EvolveResources.length);

        for (var v3 = 0; v3 < this.EvolveResources.length; v3++) {

            Resource.__write(writer, this.EvolveResources[v3]);
        }

        writer.writeByte(Tag.Table);
        DrawingResource.__write(writer, this.RemoveGetDrawing);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.RemoveCostMoney);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.RemoveGetResources.length);

        for (var v3 = 0; v3 < this.RemoveGetResources.length; v3++) {

            Resource.__write(writer, this.RemoveGetResources[v3]);
        }

        writer.writeByte(Tag.String);
        writer.writeString(this.Description);

        writer.writeByte(Tag.String);
        writer.writeString(this.Asset);

        writer.writeByte(Tag.Table);
        Order.__write(writer, this.Order);
    }
};

module.exports.CardTemplate = CardTemplate;

var Card = {
    __new: function __new() {

        this.Oid = 0;

        this.Template = 0;

        this.EffectSkills = [];

        this.Power = 0;
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Template = reader.readUInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.EffectSkills = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = 0;

                v3 = reader.readUInt16();

                this.EffectSkills[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Power = reader.readByte();
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
        writer.writeByte(4);

        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);

        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.Template);

        writer.writeByte(Tag.I16 << 4 | Tag.List);
        writer.writeUInt16(this.EffectSkills.length);

        for (var v3 = 0; v3 < this.EffectSkills.length; v3++) {

            writer.writeUInt16(this.EffectSkills[v3]);
        }

        writer.writeByte(Tag.I8);
        writer.writeByte(this.Power);
    }
};

module.exports.Card = Card;

var Battle = {
    __new: function __new() {

        this.Oid = 0;

        this.Type = "PVP";

        this.State = "Creating";

        this.Play = false;

        this.Trick = 0;

        this.EnemyBlood = 0;

        this.SelfBlood = 0;

        this.EnemyHandCards = [];

        this.SelfHandCards = [];

        this.EnemyLivingCards = [];

        this.SelfLivingCards = [];

        this.EnemyDeadCards = [];

        this.SelfDeadCards = [];
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Type = BattleType.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.State = BattleState.__read(reader);
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Play = reader.readBoolean();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Trick = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.EnemyBlood = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.SelfBlood = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.EnemyHandCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.EnemyHandCards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.SelfHandCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.SelfHandCards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.EnemyLivingCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.EnemyLivingCards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.SelfLivingCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.SelfLivingCards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.EnemyDeadCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.EnemyDeadCards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.SelfDeadCards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Card.__read(reader);

                this.SelfDeadCards[i3] = v3;
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
        writer.writeByte(13);

        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);

        writer.writeByte(Tag.I8);
        BattleType.__write(writer, this.Type);

        writer.writeByte(Tag.I8);
        BattleState.__write(writer, this.State);

        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Play);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.Trick);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.EnemyBlood);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.SelfBlood);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.EnemyHandCards.length);

        for (var v3 = 0; v3 < this.EnemyHandCards.length; v3++) {

            Card.__write(writer, this.EnemyHandCards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.SelfHandCards.length);

        for (var v3 = 0; v3 < this.SelfHandCards.length; v3++) {

            Card.__write(writer, this.SelfHandCards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.EnemyLivingCards.length);

        for (var v3 = 0; v3 < this.EnemyLivingCards.length; v3++) {

            Card.__write(writer, this.EnemyLivingCards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.SelfLivingCards.length);

        for (var v3 = 0; v3 < this.SelfLivingCards.length; v3++) {

            Card.__write(writer, this.SelfLivingCards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.EnemyDeadCards.length);

        for (var v3 = 0; v3 < this.EnemyDeadCards.length; v3++) {

            Card.__write(writer, this.EnemyDeadCards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.SelfDeadCards.length);

        for (var v3 = 0; v3 < this.SelfDeadCards.length; v3++) {

            Card.__write(writer, this.SelfDeadCards[v3]);
        }
    }
};

module.exports.Battle = Battle;

var UserNotFound = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.UserNotFound = UserNotFound;

var AlreadyInBattle = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.AlreadyInBattle = AlreadyInBattle;

var CardType = {

    Fighter: 1,

    Magic: 2,

    Player: 4,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 1:
                return "Fighter";

            case 2:
                return "Magic";

            case 4:
                return "Player";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "Fighter":
                writer.WriteByte(1);

            case "Magic":
                writer.WriteByte(2);

            case "Player":
                writer.WriteByte(4);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.CardType = CardType;

var SetupSkill = {
    __new: function __new() {

        this.ID = "";

        this.Locked = false;
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.ID = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Locked = reader.readBoolean();
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
        writer.writeByte(2);

        writer.writeByte(Tag.String);
        writer.writeString(this.ID);

        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Locked);
    }
};

module.exports.SetupSkill = SetupSkill;

var DrawingResource = {
    __new: function __new() {

        this.ID = 0;

        this.Count = 0;
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.ID = reader.readUInt16();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Count = reader.readUInt16();
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
        writer.writeByte(2);

        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.ID);

        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.Count);
    }
};

module.exports.DrawingResource = DrawingResource;

var BattleReport = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.BattleReport = BattleReport;

var CardJob = {

    Tank: 1,

    Ship: 2,

    AirPlane: 4,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 1:
                return "Tank";

            case 2:
                return "Ship";

            case 4:
                return "AirPlane";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "Tank":
                writer.WriteByte(1);

            case "Ship":
                writer.WriteByte(2);

            case "AirPlane":
                writer.WriteByte(4);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.CardJob = CardJob;

var Order = {
    __new: function __new() {

        this.X = 0;

        this.Y = 0;
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.X = reader.readByte();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Y = reader.readByte();
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
        writer.writeByte(2);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.X);

        writer.writeByte(Tag.I8);
        writer.writeByte(this.Y);
    }
};

module.exports.Order = Order;

var CardState = {

    LivingCard: 1,

    DeadCard: 2,

    HandCard: 4,

    DeckCard: 8,

    PlaySkill: 16,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 1:
                return "LivingCard";

            case 2:
                return "DeadCard";

            case 4:
                return "HandCard";

            case 8:
                return "DeckCard";

            case 16:
                return "PlaySkill";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "LivingCard":
                writer.WriteByte(1);

            case "DeadCard":
                writer.WriteByte(2);

            case "HandCard":
                writer.WriteByte(4);

            case "DeckCard":
                writer.WriteByte(8);

            case "PlaySkill":
                writer.WriteByte(16);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.CardState = CardState;

var Player = {
    __new: function __new() {

        this.Name = "";

        this.Resources = [];

        this.Cards = [];

        this.CardGroups = [];
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.Resources = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new Resource.__read(reader);

                this.Resources[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.Cards = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = 0;

                v3 = reader.readUInt64();

                this.Cards[i3] = v3;
            }
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = reader.readUInt16();

            this.CardGroups = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = {};

                v3 = new CardGroup.__read(reader);

                this.CardGroups[i3] = v3;
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
        writer.writeByte(4);

        writer.writeByte(Tag.String);
        writer.writeString(this.Name);

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.Resources.length);

        for (var v3 = 0; v3 < this.Resources.length; v3++) {

            Resource.__write(writer, this.Resources[v3]);
        }

        writer.writeByte(Tag.I64 << 4 | Tag.List);
        writer.writeUInt16(this.Cards.length);

        for (var v3 = 0; v3 < this.Cards.length; v3++) {

            writer.writeUInt64(this.Cards[v3]);
        }

        writer.writeByte(Tag.Table << 4 | Tag.List);
        writer.writeUInt16(this.CardGroups.length);

        for (var v3 = 0; v3 < this.CardGroups.length; v3++) {

            CardGroup.__write(writer, this.CardGroups[v3]);
        }
    }
};

module.exports.Player = Player;

cc._RFpop();
},{"./com.gsrpc":"com.gsrpc"}],"com.gsrpc.test":[function(require,module,exports){
"use strict";
cc._RFpush(module, '02252oVi0RND4QJvk1al/Je', 'com.gsrpc.test');
// scripts\gen\com.gsrpc.test.js



var KV = {
    __new: function __new() {

        this.Key = "";

        this.Value = "";
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Key = reader.readString();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Value = reader.readString();
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
        writer.writeByte(2);

        writer.writeByte(Tag.String);
        writer.writeString(this.Key);

        writer.writeByte(Tag.String);
        writer.writeString(this.Value);
    }
};

module.exports.KV = KV;

var TimeUnit = {

    Second: 0,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 0:
                return "Second";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "Second":
                writer.WriteByte(0);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.TimeUnit = TimeUnit;

var Duration = {
    __new: function __new() {

        this.Value = 0;

        this.Unit = "Second";
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Value = reader.readInt32();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Unit = TimeUnit.__read(reader);
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
        writer.writeByte(2);

        writer.writeByte(Tag.I32);
        writer.writeInt32(this.Value);

        writer.writeByte(Tag.I8);
        TimeUnit.__write(writer, this.Unit);
    }
};

module.exports.Duration = Duration;

var RemoteException = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.RemoteException = RemoteException;

module.exports.RESTful = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.Post = function (arg0, arg1, callback, timeout) {};

        this.Get = function (arg0, callback, timeout) {};

        this.SayHello = function (arg0) {};
    }
};

var Block = {
    __new: function __new() {

        this.Content = [];

        this.KV = [];
    },

    __read: function __read(reader) {
        var __fields = reader.readByte();

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            this.Content = reader.readBytes();
        }

        if (--__fields == 0) {
            return;
        }

        var tag = reader.readByte();

        if (tag != Tag.Skip) {
            var max3 = 128;

            this.KV = [];

            for (var i3 = 0; i3 < max3; i3++) {

                var v3 = [];

                var max4 = 12;

                v3 = [];

                for (var i4 = 0; i4 < max4; i4++) {

                    var v4 = {};

                    v4 = new KV.__read(reader);

                    v3[i4] = v4;
                }

                this.KV[i3] = v3;
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
        writer.writeByte(2);

        writer.writeByte(Tag.I8 << 4 | Tag.List);
        writer.writeBytes(this.Content);

        writer.writeByte((Tag.Table << 4 | Tag.List) << 4 | Tag.List);
        writer.writeUInt16(this.KV.length);

        for (var v3 = 0; v3 < this.KV.length; v3++) {

            writer.writeUInt16(this.KV[v3].length);

            for (var v4 = 0; v4 < this.KV[v3].length; v4++) {

                KV.__write(writer, this.KV[v3][v4]);
            }
        }
    }
};

module.exports.Block = Block;

var NotFound = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.NotFound = NotFound;

var ResourceError = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.ResourceError = ResourceError;

module.exports.RESTfull = {
    rpc: function rpc(channel, id) {
        this._channel = channel;
        this._id = id;

        this.Get = function (arg0, callback, timeout) {};

        this.Put = function (arg0, arg1, callback, timeout) {};
    }
};

cc._RFpop();
},{}],"com.gsrpc.trace":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd76e9mREMVMAbHDoLLsy7e7', 'com.gsrpc.trace');
// scripts\gen\com.gsrpc.trace.js

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

cc._RFpop();
},{"./com.gsrpc":"com.gsrpc"}],"com.gsrpc":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1dc20onor5AtpuvrWz3hPxG', 'com.gsrpc');
// scripts\gen\com.gsrpc.js



var NamedService = {
    __new: function __new() {

        this.Name = "";

        this.DispatchID = 0;

        this.VNodes = 0;

        this.NodeName = "";
    },

    __read: function __read(reader) {

        this.Name = reader.readString();

        this.DispatchID = reader.readUInt16();

        this.VNodes = reader.readUInt32();

        this.NodeName = reader.readString();
    },

    __write: function __write(writer, val) {

        writer.writeString(this.Name);

        writer.writeUInt16(this.DispatchID);

        writer.writeUInt32(this.VNodes);

        writer.writeString(this.NodeName);
    }
};

module.exports.NamedService = NamedService;

var TunnelWhoAmI = {
    __new: function __new() {

        this.Services = [];
    },

    __read: function __read(reader) {

        var max3 = reader.readUInt16();

        this.Services = [];

        for (var i3 = 0; i3 < max3; i3++) {

            var v3 = {};

            v3 = new NamedService.__read(reader);

            this.Services[i3] = v3;
        }
    },

    __write: function __write(writer, val) {

        writer.writeUInt16(this.Services.length);

        for (var v3 = 0; v3 < this.Services.length; v3++) {

            NamedService.__write(writer, this.Services[v3]);
        }
    }
};

module.exports.TunnelWhoAmI = TunnelWhoAmI;

var Tunnel = {
    __new: function __new() {

        this.ID = {};

        this.Message = {};
    },

    __read: function __read(reader) {

        this.ID = new Device.__read(reader);

        this.Message = new Message.__read(reader);
    },

    __write: function __write(writer, val) {

        Device.__write(writer, this.ID);

        Message.__write(writer, this.Message);
    }
};

module.exports.Tunnel = Tunnel;

var UnmarshalException = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.UnmarshalException = UnmarshalException;

var Message = {
    __new: function __new() {

        this.Code = "Heartbeat";

        this.Agent = 0;

        this.Content = [];
    },

    __read: function __read(reader) {

        this.Code = Code.__read(reader);

        this.Agent = reader.readByte();

        this.Content = reader.readBytes();
    },

    __write: function __write(writer, val) {

        Code.__write(writer, this.Code);

        writer.writeByte(this.Agent);

        writer.writeBytes(this.Content);
    }
};

module.exports.Message = Message;

var OSType = {

    Windows: 0,

    Linux: 1,

    OSX: 2,

    WP: 3,

    Android: 4,

    iOS: 5,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

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

    __write: function __write(writer, val) {
        switch (val) {

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
    }
};
module.exports.OSType = OSType;

var ArchType = {

    X86: 0,

    X64: 1,

    ARM: 2,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

            case 0:
                return "X86";

            case 1:
                return "X64";

            case 2:
                return "ARM";

        }

        return undefined;
    },

    __write: function __write(writer, val) {
        switch (val) {

            case "X86":
                writer.WriteByte(0);

            case "X64":
                writer.WriteByte(1);

            case "ARM":
                writer.WriteByte(2);

            default:
                throw "unknown enum :" + val;
        }
    }
};
module.exports.ArchType = ArchType;

var Code = {

    Heartbeat: 0,

    WhoAmI: 1,

    Request: 2,

    Response: 3,

    Accept: 4,

    Reject: 5,

    Tunnel: 6,

    TunnelWhoAmI: 7,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

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

    __write: function __write(writer, val) {
        switch (val) {

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
    }
};
module.exports.Code = Code;

var Param = {
    __new: function __new() {

        this.Content = [];
    },

    __read: function __read(reader) {

        this.Content = reader.readBytes();
    },

    __write: function __write(writer, val) {

        writer.writeBytes(this.Content);
    }
};

module.exports.Param = Param;

var InvalidContract = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.InvalidContract = InvalidContract;

var Request = {
    __new: function __new() {

        this.ID = 0;

        this.Service = 0;

        this.Method = 0;

        this.Params = [];

        this.Trace = 0;

        this.Prev = 0;
    },

    __read: function __read(reader) {

        this.ID = reader.readUInt32();

        this.Service = reader.readUInt16();

        this.Method = reader.readUInt16();

        var max3 = reader.readUInt16();

        this.Params = [];

        for (var i3 = 0; i3 < max3; i3++) {

            var v3 = {};

            v3 = new Param.__read(reader);

            this.Params[i3] = v3;
        }

        this.Trace = reader.readUInt64();

        this.Prev = reader.readUInt32();
    },

    __write: function __write(writer, val) {

        writer.writeUInt32(this.ID);

        writer.writeUInt16(this.Service);

        writer.writeUInt16(this.Method);

        writer.writeUInt16(this.Params.length);

        for (var v3 = 0; v3 < this.Params.length; v3++) {

            Param.__write(writer, this.Params[v3]);
        }

        writer.writeUInt64(this.Trace);

        writer.writeUInt32(this.Prev);
    }
};

module.exports.Request = Request;

var Response = {
    __new: function __new() {

        this.ID = 0;

        this.Exception = 0;

        this.Content = [];

        this.Trace = 0;
    },

    __read: function __read(reader) {

        this.ID = reader.readUInt32();

        this.Exception = reader.readSByte();

        this.Content = reader.readBytes();

        this.Trace = reader.readUInt64();
    },

    __write: function __write(writer, val) {

        writer.writeUInt32(this.ID);

        writer.writeSByte(this.Exception);

        writer.writeBytes(this.Content);

        writer.writeUInt64(this.Trace);
    }
};

module.exports.Response = Response;

var Device = {
    __new: function __new() {

        this.ID = "";

        this.Type = "";

        this.Arch = "X86";

        this.OS = "Windows";

        this.OSVersion = "";

        this.AppKey = "";
    },

    __read: function __read(reader) {

        this.ID = reader.readString();

        this.Type = reader.readString();

        this.Arch = ArchType.__read(reader);

        this.OS = OSType.__read(reader);

        this.OSVersion = reader.readString();

        this.AppKey = reader.readString();
    },

    __write: function __write(writer, val) {

        writer.writeString(this.ID);

        writer.writeString(this.Type);

        ArchType.__write(writer, this.Arch);

        OSType.__write(writer, this.OS);

        writer.writeString(this.OSVersion);

        writer.writeString(this.AppKey);
    }
};

module.exports.Device = Device;

var RemoteException = {
    __new: function __new() {},

    __read: function __read(reader) {
        var __fields = reader.readByte();

        for (var i = 0; i < __fields; i++) {
            var tag = reader.readByte();

            if (tag == Tag.Skip) {
                continue;
            }

            reader.readSkip(tag);
        }
    },

    __write: function __write(writer, val) {
        writer.writeByte(0);
    }
};

module.exports.RemoteException = RemoteException;

var KV = {
    __new: function __new() {

        this.Key = [];

        this.Value = [];
    },

    __read: function __read(reader) {

        this.Key = reader.readBytes();

        this.Value = reader.readBytes();
    },

    __write: function __write(writer, val) {

        writer.writeBytes(this.Key);

        writer.writeBytes(this.Value);
    }
};

module.exports.KV = KV;

var Time = {
    __new: function __new() {

        this.Second = 0;

        this.Nano = 0;
    },

    __read: function __read(reader) {

        this.Second = reader.readUInt64();

        this.Nano = reader.readUInt64();
    },

    __write: function __write(writer, val) {

        writer.writeUInt64(this.Second);

        writer.writeUInt64(this.Nano);
    }
};

module.exports.Time = Time;

var State = {

    Disconnect: 0,

    Connecting: 1,

    Connected: 2,

    Disconnecting: 3,

    Closed: 4,

    __read: function __read(reader) {
        var code = reader.readByte();

        switch (code) {

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

    __write: function __write(writer, val) {
        switch (val) {

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
    }
};
module.exports.State = State;

var Tag = {

    I8: 0,

    I16: 1,

    I32: 2,

    I64: 3,

    List: 4,

    Table: 5,

    String: 6,

    Skip: 7,

    __read: function __read(reader) {
        var code = reader.readUInt32();

        switch (code) {

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

    __write: function __write(writer, val) {
        switch (val) {

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
    }
};
module.exports.Tag = Tag;

var WhoAmI = {
    __new: function __new() {

        this.ID = {};

        this.Context = [];
    },

    __read: function __read(reader) {

        this.ID = new Device.__read(reader);

        this.Context = reader.readBytes();
    },

    __write: function __write(writer, val) {

        Device.__write(writer, this.ID);

        writer.writeBytes(this.Context);
    }
};

module.exports.WhoAmI = WhoAmI;

cc._RFpop();
},{}],"jsrpc":[function(require,module,exports){
"use strict";
cc._RFpush(module, '84273w/EgJDhZmfw98Bm9Ev', 'jsrpc');
// scripts\jsrpc\jsrpc.js

module.exports.client = {
    connect: function connect(url, config) {

        if (!config) {
            config = {};
        }

        var clientself = this;

        var ws = new WebSocket(url);

        ws.onopen = function (event) {
            console.log("websocket open");
        };

        ws.onmessage = function (event) {
            console.log("websocket recv");
        };

        ws.onerror = function (event) {
            console.log("websocket onerror:");
        };

        ws.onclose = function (event) {
            console.log("websocket onclose :" + event.code + " " + event.reason);

            if (config.reconnect) {
                setTimeout(function () {
                    clientself.connect(url, config);
                }, config.timeout);
            }
        };
    }
};

cc._RFpop();
},{}],"main":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c4439gu1GdHPpnT02dNTEv1', 'main');
// scripts\main.js

var jsrpc = require("./jsrpc/jsrpc");
var gsrpc = require("./gen/com.gsrpc");

console.log(exports.test);

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {

        var ns = new gsrpc.NamedService.__new();

        jsrpc.client.connect("ws://127.0.0.1:13517/api", {
            reconnect: true,
            timeout: 2000
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"./gen/com.gsrpc":"com.gsrpc","./jsrpc/jsrpc":"jsrpc"}]},{},["com.gsrpc.test","com.gsrpc","jsrpc","main","com.gsrpc.trace","com.gamedocker.gwent"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcHMvQ29jb3NDcmVhdG9yL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL3NjcmlwdHMvZ2VuL2NvbS5nYW1lZG9ja2VyLmd3ZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvZ2VuL2NvbS5nc3JwYy50ZXN0LmpzIiwiYXNzZXRzL3NjcmlwdHMvZ2VuL2NvbS5nc3JwYy50cmFjZS5qcyIsImFzc2V0cy9zY3JpcHRzL2dlbi9jb20uZ3NycGMuanMiLCJhc3NldHMvc2NyaXB0cy9qc3JwYy9qc3JwYy5qcyIsImFzc2V0cy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2p5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjA2ZWQyaUxIbEF1b2cyRXJXSDEyMGUnLCAnY29tLmdhbWVkb2NrZXIuZ3dlbnQnKTtcbi8vIHNjcmlwdHNcXGdlblxcY29tLmdhbWVkb2NrZXIuZ3dlbnQuanNcblxudmFyIERldmljZSA9IHJlcXVpcmUoXCIuL2NvbS5nc3JwY1wiKS5EZXZpY2U7XG5cbnZhciBESEtleSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5QID0gXCJcIjtcblxuICAgICAgICB0aGlzLkcgPSBcIlwiO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuUCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5HID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgyKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5QKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5HKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5ESEtleSA9IERIS2V5O1xuXG5tb2R1bGUuZXhwb3J0cy5Vc2VyQmluZGVyID0ge1xuICAgIHJwYzogZnVuY3Rpb24gcnBjKGNoYW5uZWwsIGlkKSB7XG4gICAgICAgIHRoaXMuX2NoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuXG4gICAgICAgIHRoaXMuQmluZFVzZXIgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuVW5iaW5kVXNlciA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuQXV0aCA9IHtcbiAgICBycGM6IGZ1bmN0aW9uIHJwYyhjaGFubmVsLCBpZCkge1xuICAgICAgICB0aGlzLl9jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcblxuICAgICAgICB0aGlzLkxvZ2luID0gZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLkxvZ29mZiA9IGZ1bmN0aW9uIChhcmcwLCBjYWxsYmFjaywgdGltZW91dCkge307XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuQWdlbnQgPSB7XG4gICAgcnBjOiBmdW5jdGlvbiBycGMoY2hhbm5lbCwgaWQpIHtcbiAgICAgICAgdGhpcy5fY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG5cbiAgICAgICAgdGhpcy5HZXRQbGF5ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuU3RhcnRCYXR0bGUgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuQ2FuY2VsQmF0dGxlID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlBsYXkgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuU3VycmVuZGVyID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlJlc3VtZUJhdHRsZSA9IGZ1bmN0aW9uIChhcmcwLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5Eb3dubG9hZENhcmRUZW1wbGF0ZXMgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuQ2FuY2VsRG93bmxvYWRDYXJkVGVtcGxhdGVzID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLkRvd25sb2FkQ2FyZHMgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuRG93bmxvYWRTa2lsbHMgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuQ2FuY2VsRG93bmxvYWRDYXJkcyA9IGZ1bmN0aW9uIChhcmcwLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5DYXJkR3JvdXBzID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5DbGllbnQgPSB7XG4gICAgcnBjOiBmdW5jdGlvbiBycGMoY2hhbm5lbCwgaWQpIHtcbiAgICAgICAgdGhpcy5fY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG5cbiAgICAgICAgdGhpcy5PbkJhdHRsZVJlcG9ydCA9IGZ1bmN0aW9uIChhcmcwLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5PblJlc3VtZUJhdHRsZSA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5CZWdpbkJhdHRsZSA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5FbmRCYXR0bGUgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuQmVnaW5VcGRhdGVDYXJkVGVtcGxhdGVzID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlVwZGF0ZUNhcmRUZW1wbGF0ZXMgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuRW5kVXBkYXRlQ2FyZFRlbXBsYXRlcyA9IGZ1bmN0aW9uIChhcmcwLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5CZWdpblVwZGF0ZUNhcmRzID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlVwZGF0ZUNhcmRzID0gZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLkVuZFVwZGF0ZUNhcmRzID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLkJlZ2luVXBkYXRlU2tpbGxzID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlVwZGF0ZVNraWxscyA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5FbmRVcGRhdGVTa2lsbHMgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuT25Ucmlja0JlZ2luID0gZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLk9uUGxheUNhcmQgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuT25Nb3ZlQ2FyZHMgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuT25VcGRhdGVQb3dlciA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5PbkFkZFNraWxsID0gZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLk9uUmVtb3ZlU2tpbGwgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuT25Ucmlja0VuZCA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG4gICAgfVxufTtcblxudmFyIFVzZXJBdXRoRmFpbGVkID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHt9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgwKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5Vc2VyQXV0aEZhaWxlZCA9IFVzZXJBdXRoRmFpbGVkO1xuXG52YXIgVXNlckFscmVhZHlMb2dpbiA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5OYW1lID0gXCJcIjtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLk5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDEpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLk5hbWUpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLlVzZXJBbHJlYWR5TG9naW4gPSBVc2VyQWxyZWFkeUxvZ2luO1xuXG52YXIgUmVzb3VyY2VOb3RGb3VuZCA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuUmVzb3VyY2VOb3RGb3VuZCA9IFJlc291cmNlTm90Rm91bmQ7XG5cbnZhciBTa2lsbFRhcmdldCA9IHtcblxuICAgIExpdmluZ0NhcmQ6IDEsXG5cbiAgICBEZWFkQ2FyZDogMixcblxuICAgIEhhbmRDYXJkOiA0LFxuXG4gICAgRGVja0NhcmQ6IDgsXG5cbiAgICBQbGF5U2tpbGw6IDE2LFxuXG4gICAgU2VsZjogMzIsXG5cbiAgICBFbmVteTogNjQsXG5cbiAgICBUYW5rOiAxMjgsXG5cbiAgICBTaGlwOiAyNTYsXG5cbiAgICBBaXJQbGFuZTogNTEyLFxuXG4gICAgTWFnaWM6IDEwMjQsXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSByZWFkZXIucmVhZFVJbnQzMigpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2aW5nQ2FyZFwiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVhZENhcmRcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhhbmRDYXJkXCI7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZWNrQ2FyZFwiO1xuXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYXlTa2lsbFwiO1xuXG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlbGZcIjtcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmVteVwiO1xuXG4gICAgICAgICAgICBjYXNlIDEyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYW5rXCI7XG5cbiAgICAgICAgICAgIGNhc2UgMjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNoaXBcIjtcblxuICAgICAgICAgICAgY2FzZSA1MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlyUGxhbmVcIjtcblxuICAgICAgICAgICAgY2FzZSAxMDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hZ2ljXCI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcblxuICAgICAgICAgICAgY2FzZSBcIkxpdmluZ0NhcmRcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJEZWFkQ2FyZFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZVVJbnQzMigyKTtcblxuICAgICAgICAgICAgY2FzZSBcIkhhbmRDYXJkXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlVUludDMyKDQpO1xuXG4gICAgICAgICAgICBjYXNlIFwiRGVja0NhcmRcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoOCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJQbGF5U2tpbGxcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMTYpO1xuXG4gICAgICAgICAgICBjYXNlIFwiU2VsZlwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZVVJbnQzMigzMik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJFbmVteVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZVVJbnQzMig2NCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJUYW5rXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlVUludDMyKDEyOCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJTaGlwXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlVUludDMyKDI1Nik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJBaXJQbGFuZVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZVVJbnQzMig1MTIpO1xuXG4gICAgICAgICAgICBjYXNlIFwiTWFnaWNcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMTAyNCk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLlNraWxsVGFyZ2V0ID0gU2tpbGxUYXJnZXQ7XG5cbnZhciBBY3Rpb24gPSB7XG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSByZWFkZXIucmVhZFVJbnQzMigpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge31cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcblxudmFyIEJhdHRsZVR5cGUgPSB7XG5cbiAgICBQVlA6IDAsXG5cbiAgICBQVkU6IDEsXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBWUFwiO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUFZFXCI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcblxuICAgICAgICAgICAgY2FzZSBcIlBWUFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJQVkVcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDEpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IFwidW5rbm93biBlbnVtIDpcIiArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5CYXR0bGVUeXBlID0gQmF0dGxlVHlwZTtcblxudmFyIENhcmRSYXJpdHkgPSB7XG5cbiAgICBDb21tb246IDAsXG5cbiAgICBSYXJlOiAxLFxuXG4gICAgVWx0cmE6IDIsXG5cbiAgICBMZWdlbmRhcnk6IDMsXG5cbiAgICBFcGljOiA0LFxuXG4gICAgTXl0aGljOiA1LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBjb2RlID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21tb25cIjtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhcmVcIjtcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVsdHJhXCI7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWdlbmRhcnlcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVwaWNcIjtcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk15dGhpY1wiO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJDb21tb25cIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDApO1xuXG4gICAgICAgICAgICBjYXNlIFwiUmFyZVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJVbHRyYVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJMZWdlbmRhcnlcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDMpO1xuXG4gICAgICAgICAgICBjYXNlIFwiRXBpY1wiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoNCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJNeXRoaWNcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDUpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IFwidW5rbm93biBlbnVtIDpcIiArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5DYXJkUmFyaXR5ID0gQ2FyZFJhcml0eTtcblxudmFyIFJlc291cmNlID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLk5hbWUgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuRnJvbSA9IDA7XG5cbiAgICAgICAgdGhpcy5UbyA9IDA7XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5OYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkZyb20gPSByZWFkZXIucmVhZFVJbnQzMigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVG8gPSByZWFkZXIucmVhZFVJbnQzMigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDMpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLk5hbWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLkZyb20pO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLlRvKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xuXG52YXIgU2tpbGwgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuSUQgPSAwO1xuXG4gICAgICAgIHRoaXMuS2V5ID0gXCJcIjtcblxuICAgICAgICB0aGlzLk5hbWUgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuU291cmNlID0gXCJGaWdodGVyXCI7XG5cbiAgICAgICAgdGhpcy5Hcm91cCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gMDtcblxuICAgICAgICB0aGlzLkVmZmVjdCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5FZmZlY3RWYWx1ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5EZXNjcmlwdGlvbiA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5Bc3NldEljb24gPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuQXNzZXRBbmltYXRpb24gPSBcIlwiO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuSUQgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuS2V5ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLk5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuU291cmNlID0gQ2FyZFR5cGUuX19yZWFkKHJlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5Hcm91cCA9IHJlYWRlci5yZWFkQm9vbGVhbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVGFyZ2V0ID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkVmZmVjdCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5FZmZlY3RWYWx1ZSA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkRlc2NyaXB0aW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkFzc2V0SWNvbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5Bc3NldEFuaW1hdGlvbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMTEpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkxNik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLklEKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5LZXkpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLk5hbWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgQ2FyZFR5cGUuX193cml0ZSh3cml0ZXIsIHRoaXMuU291cmNlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJvb2xlYW4odGhpcy5Hcm91cCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTMyKTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDMyKHRoaXMuVGFyZ2V0KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5FZmZlY3QpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZUludDMyKHRoaXMuRWZmZWN0VmFsdWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLkRlc2NyaXB0aW9uKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5Bc3NldEljb24pO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLkFzc2V0QW5pbWF0aW9uKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5Ta2lsbCA9IFNraWxsO1xuXG52YXIgQ2FyZEdyb3VwID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLk9pZCA9IDA7XG5cbiAgICAgICAgdGhpcy5DYXJkcyA9IFtdO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuT2lkID0gcmVhZGVyLnJlYWRVSW50NjQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuQ2FyZHMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaTMgPSAwOyBpMyA8IG1heDM7IGkzKyspIHtcblxuICAgICAgICAgICAgICAgIHZhciB2MyA9IDA7XG5cbiAgICAgICAgICAgICAgICB2MyA9IHJlYWRlci5yZWFkVUludDY0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkNhcmRzW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk2NCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQ2NCh0aGlzLk9pZCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTY0IDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLkNhcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuQ2FyZHMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIHdyaXRlci53cml0ZVVJbnQ2NCh0aGlzLkNhcmRzW3YzXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5DYXJkR3JvdXAgPSBDYXJkR3JvdXA7XG5cbnZhciBCYXR0bGVTdGF0ZSA9IHtcblxuICAgIENyZWF0aW5nOiAxLFxuXG4gICAgUHJvY2Vzc2luZzogMixcblxuICAgIFdpbjogNCxcblxuICAgIEZhaWx1cmU6IDgsXG5cbiAgICBPZmZsaW5lOiAxNixcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3JlYXRpbmdcIjtcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Nlc3NpbmdcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldpblwiO1xuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFpbHVyZVwiO1xuXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9mZmxpbmVcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuXG4gICAgICAgICAgICBjYXNlIFwiQ3JlYXRpbmdcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDEpO1xuXG4gICAgICAgICAgICBjYXNlIFwiUHJvY2Vzc2luZ1wiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJXaW5cIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDQpO1xuXG4gICAgICAgICAgICBjYXNlIFwiRmFpbHVyZVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoOCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJPZmZsaW5lXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxNik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLkJhdHRsZVN0YXRlID0gQmF0dGxlU3RhdGU7XG5cbnZhciBDYXJkVGVtcGxhdGUgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuSUQgPSAwO1xuXG4gICAgICAgIHRoaXMuQ2FyZElEID0gMDtcblxuICAgICAgICB0aGlzLlR5cGUgPSBcIkZpZ2h0ZXJcIjtcblxuICAgICAgICB0aGlzLk5hbWUgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuSm9iID0gXCJUYW5rXCI7XG5cbiAgICAgICAgdGhpcy5SYWNlID0gXCJcIjtcblxuICAgICAgICB0aGlzLlJhcml0eSA9IFwiQ29tbW9uXCI7XG5cbiAgICAgICAgdGhpcy5HcmFkZSA9IDA7XG5cbiAgICAgICAgdGhpcy5Qb3dlciA9IDA7XG5cbiAgICAgICAgdGhpcy5Ta2lsbHMgPSBbXTtcblxuICAgICAgICB0aGlzLlRyYWRhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5Fdm9sdmFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLkV2b2x2ZURyYXdpbmcgPSB7fTtcblxuICAgICAgICB0aGlzLkV2b2x2ZU1vbmV5ID0gMDtcblxuICAgICAgICB0aGlzLkV2b2x2ZVJlc291cmNlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuUmVtb3ZlR2V0RHJhd2luZyA9IHt9O1xuXG4gICAgICAgIHRoaXMuUmVtb3ZlQ29zdE1vbmV5ID0gMDtcblxuICAgICAgICB0aGlzLlJlbW92ZUdldFJlc291cmNlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuRGVzY3JpcHRpb24gPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuQXNzZXQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuT3JkZXIgPSB7fTtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLklEID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkNhcmRJRCA9IHJlYWRlci5yZWFkVUludDMyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5UeXBlID0gQ2FyZFR5cGUuX19yZWFkKHJlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5OYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkpvYiA9IENhcmRKb2IuX19yZWFkKHJlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5SYWNlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlJhcml0eSA9IENhcmRSYXJpdHkuX19yZWFkKHJlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5HcmFkZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuUG93ZXIgPSByZWFkZXIucmVhZEJ5dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuU2tpbGxzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IFNldHVwU2tpbGwuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLlNraWxsc1tpM10gPSB2MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlRyYWRhYmxlID0gcmVhZGVyLnJlYWRCb29sZWFuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5Fdm9sdmFibGUgPSByZWFkZXIucmVhZEJvb2xlYW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkV2b2x2ZURyYXdpbmcgPSBuZXcgRHJhd2luZ1Jlc291cmNlLl9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuRXZvbHZlTW9uZXkgPSByZWFkZXIucmVhZFVJbnQzMigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgdGhpcy5Fdm9sdmVSZXNvdXJjZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaTMgPSAwOyBpMyA8IG1heDM7IGkzKyspIHtcblxuICAgICAgICAgICAgICAgIHZhciB2MyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgdjMgPSBuZXcgUmVzb3VyY2UuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkV2b2x2ZVJlc291cmNlc1tpM10gPSB2MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUdldERyYXdpbmcgPSBuZXcgRHJhd2luZ1Jlc291cmNlLl9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ29zdE1vbmV5ID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlR2V0UmVzb3VyY2VzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IFJlc291cmNlLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5SZW1vdmVHZXRSZXNvdXJjZXNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5EZXNjcmlwdGlvbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5Bc3NldCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5PcmRlciA9IG5ldyBPcmRlci5fX3JlYWQocmVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgyMSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTMyKTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDMyKHRoaXMuSUQpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLkNhcmRJRCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTgpO1xuICAgICAgICBDYXJkVHlwZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5UeXBlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5OYW1lKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIENhcmRKb2IuX193cml0ZSh3cml0ZXIsIHRoaXMuSm9iKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5TdHJpbmcpO1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5SYWNlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIENhcmRSYXJpdHkuX193cml0ZSh3cml0ZXIsIHRoaXMuUmFyaXR5KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUodGhpcy5HcmFkZSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTgpO1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKHRoaXMuUG93ZXIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlNraWxscy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIHYzID0gMDsgdjMgPCB0aGlzLlNraWxscy5sZW5ndGg7IHYzKyspIHtcblxuICAgICAgICAgICAgU2V0dXBTa2lsbC5fX3dyaXRlKHdyaXRlciwgdGhpcy5Ta2lsbHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQm9vbGVhbih0aGlzLlRyYWRhYmxlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJvb2xlYW4odGhpcy5Fdm9sdmFibGUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlKTtcbiAgICAgICAgRHJhd2luZ1Jlc291cmNlLl9fd3JpdGUod3JpdGVyLCB0aGlzLkV2b2x2ZURyYXdpbmcpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLkV2b2x2ZU1vbmV5KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5UYWJsZSA8PCA0IHwgVGFnLkxpc3QpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5Fdm9sdmVSZXNvdXJjZXMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5Fdm9sdmVSZXNvdXJjZXMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIFJlc291cmNlLl9fd3JpdGUod3JpdGVyLCB0aGlzLkV2b2x2ZVJlc291cmNlc1t2M10pO1xuICAgICAgICB9XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuVGFibGUpO1xuICAgICAgICBEcmF3aW5nUmVzb3VyY2UuX193cml0ZSh3cml0ZXIsIHRoaXMuUmVtb3ZlR2V0RHJhd2luZyk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTMyKTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDMyKHRoaXMuUmVtb3ZlQ29zdE1vbmV5KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5UYWJsZSA8PCA0IHwgVGFnLkxpc3QpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5SZW1vdmVHZXRSZXNvdXJjZXMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5SZW1vdmVHZXRSZXNvdXJjZXMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIFJlc291cmNlLl9fd3JpdGUod3JpdGVyLCB0aGlzLlJlbW92ZUdldFJlc291cmNlc1t2M10pO1xuICAgICAgICB9XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuU3RyaW5nKTtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLkFzc2V0KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5UYWJsZSk7XG4gICAgICAgIE9yZGVyLl9fd3JpdGUod3JpdGVyLCB0aGlzLk9yZGVyKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5DYXJkVGVtcGxhdGUgPSBDYXJkVGVtcGxhdGU7XG5cbnZhciBDYXJkID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLk9pZCA9IDA7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5FZmZlY3RTa2lsbHMgPSBbXTtcblxuICAgICAgICB0aGlzLlBvd2VyID0gMDtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLk9pZCA9IHJlYWRlci5yZWFkVUludDY0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IHJlYWRlci5yZWFkVUludDMyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdmFyIG1heDMgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgICAgICB0aGlzLkVmZmVjdFNraWxscyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHYzID0gMDtcblxuICAgICAgICAgICAgICAgIHYzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuRWZmZWN0U2tpbGxzW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuUG93ZXIgPSByZWFkZXIucmVhZEJ5dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSg0KTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JNjQpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50NjQodGhpcy5PaWQpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLlRlbXBsYXRlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JMTYgPDwgNCB8IFRhZy5MaXN0KTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDE2KHRoaXMuRWZmZWN0U2tpbGxzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuRWZmZWN0U2tpbGxzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5FZmZlY3RTa2lsbHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSh0aGlzLlBvd2VyKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5DYXJkID0gQ2FyZDtcblxudmFyIEJhdHRsZSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5PaWQgPSAwO1xuXG4gICAgICAgIHRoaXMuVHlwZSA9IFwiUFZQXCI7XG5cbiAgICAgICAgdGhpcy5TdGF0ZSA9IFwiQ3JlYXRpbmdcIjtcblxuICAgICAgICB0aGlzLlBsYXkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLlRyaWNrID0gMDtcblxuICAgICAgICB0aGlzLkVuZW15Qmxvb2QgPSAwO1xuXG4gICAgICAgIHRoaXMuU2VsZkJsb29kID0gMDtcblxuICAgICAgICB0aGlzLkVuZW15SGFuZENhcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5TZWxmSGFuZENhcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5FbmVteUxpdmluZ0NhcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5TZWxmTGl2aW5nQ2FyZHMgPSBbXTtcblxuICAgICAgICB0aGlzLkVuZW15RGVhZENhcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5TZWxmRGVhZENhcmRzID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5PaWQgPSByZWFkZXIucmVhZFVJbnQ2NCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVHlwZSA9IEJhdHRsZVR5cGUuX19yZWFkKHJlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5TdGF0ZSA9IEJhdHRsZVN0YXRlLl9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuUGxheSA9IHJlYWRlci5yZWFkQm9vbGVhbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVHJpY2sgPSByZWFkZXIucmVhZEJ5dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLkVuZW15Qmxvb2QgPSByZWFkZXIucmVhZEJ5dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlNlbGZCbG9vZCA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgdGhpcy5FbmVteUhhbmRDYXJkcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHYzID0ge307XG5cbiAgICAgICAgICAgICAgICB2MyA9IG5ldyBDYXJkLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5FbmVteUhhbmRDYXJkc1tpM10gPSB2MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuU2VsZkhhbmRDYXJkcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHYzID0ge307XG5cbiAgICAgICAgICAgICAgICB2MyA9IG5ldyBDYXJkLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5TZWxmSGFuZENhcmRzW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgdGhpcy5FbmVteUxpdmluZ0NhcmRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IENhcmQuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkVuZW15TGl2aW5nQ2FyZHNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdmFyIG1heDMgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgICAgICB0aGlzLlNlbGZMaXZpbmdDYXJkcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHYzID0ge307XG5cbiAgICAgICAgICAgICAgICB2MyA9IG5ldyBDYXJkLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5TZWxmTGl2aW5nQ2FyZHNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdmFyIG1heDMgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgICAgICB0aGlzLkVuZW15RGVhZENhcmRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IENhcmQuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkVuZW15RGVhZENhcmRzW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgdGhpcy5TZWxmRGVhZENhcmRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IENhcmQuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLlNlbGZEZWFkQ2FyZHNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMTMpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk2NCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQ2NCh0aGlzLk9pZCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTgpO1xuICAgICAgICBCYXR0bGVUeXBlLl9fd3JpdGUod3JpdGVyLCB0aGlzLlR5cGUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgQmF0dGxlU3RhdGUuX193cml0ZSh3cml0ZXIsIHRoaXMuU3RhdGUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQm9vbGVhbih0aGlzLlBsYXkpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSh0aGlzLlRyaWNrKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUodGhpcy5FbmVteUJsb29kKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JOCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUodGhpcy5TZWxmQmxvb2QpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLkVuZW15SGFuZENhcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuRW5lbXlIYW5kQ2FyZHMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIENhcmQuX193cml0ZSh3cml0ZXIsIHRoaXMuRW5lbXlIYW5kQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlNlbGZIYW5kQ2FyZHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5TZWxmSGFuZENhcmRzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICBDYXJkLl9fd3JpdGUod3JpdGVyLCB0aGlzLlNlbGZIYW5kQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLkVuZW15TGl2aW5nQ2FyZHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5FbmVteUxpdmluZ0NhcmRzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICBDYXJkLl9fd3JpdGUod3JpdGVyLCB0aGlzLkVuZW15TGl2aW5nQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlNlbGZMaXZpbmdDYXJkcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIHYzID0gMDsgdjMgPCB0aGlzLlNlbGZMaXZpbmdDYXJkcy5sZW5ndGg7IHYzKyspIHtcblxuICAgICAgICAgICAgQ2FyZC5fX3dyaXRlKHdyaXRlciwgdGhpcy5TZWxmTGl2aW5nQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLkVuZW15RGVhZENhcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuRW5lbXlEZWFkQ2FyZHMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIENhcmQuX193cml0ZSh3cml0ZXIsIHRoaXMuRW5lbXlEZWFkQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlNlbGZEZWFkQ2FyZHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5TZWxmRGVhZENhcmRzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICBDYXJkLl9fd3JpdGUod3JpdGVyLCB0aGlzLlNlbGZEZWFkQ2FyZHNbdjNdKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLkJhdHRsZSA9IEJhdHRsZTtcblxudmFyIFVzZXJOb3RGb3VuZCA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuVXNlck5vdEZvdW5kID0gVXNlck5vdEZvdW5kO1xuXG52YXIgQWxyZWFkeUluQmF0dGxlID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHt9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgwKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5BbHJlYWR5SW5CYXR0bGUgPSBBbHJlYWR5SW5CYXR0bGU7XG5cbnZhciBDYXJkVHlwZSA9IHtcblxuICAgIEZpZ2h0ZXI6IDEsXG5cbiAgICBNYWdpYzogMixcblxuICAgIFBsYXllcjogNCxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlnaHRlclwiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFnaWNcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYXllclwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJGaWdodGVyXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxKTtcblxuICAgICAgICAgICAgY2FzZSBcIk1hZ2ljXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgyKTtcblxuICAgICAgICAgICAgY2FzZSBcIlBsYXllclwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoNCk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLkNhcmRUeXBlID0gQ2FyZFR5cGU7XG5cbnZhciBTZXR1cFNraWxsID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLklEID0gXCJcIjtcblxuICAgICAgICB0aGlzLkxvY2tlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuSUQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuTG9ja2VkID0gcmVhZGVyLnJlYWRCb29sZWFuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMik7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuU3RyaW5nKTtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuSUQpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQm9vbGVhbih0aGlzLkxvY2tlZCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuU2V0dXBTa2lsbCA9IFNldHVwU2tpbGw7XG5cbnZhciBEcmF3aW5nUmVzb3VyY2UgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuSUQgPSAwO1xuXG4gICAgICAgIHRoaXMuQ291bnQgPSAwO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuSUQgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuQ291bnQgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkxNik7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLklEKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JMTYpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5Db3VudCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuRHJhd2luZ1Jlc291cmNlID0gRHJhd2luZ1Jlc291cmNlO1xuXG52YXIgQmF0dGxlUmVwb3J0ID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHt9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgwKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5CYXR0bGVSZXBvcnQgPSBCYXR0bGVSZXBvcnQ7XG5cbnZhciBDYXJkSm9iID0ge1xuXG4gICAgVGFuazogMSxcblxuICAgIFNoaXA6IDIsXG5cbiAgICBBaXJQbGFuZTogNCxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFua1wiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2hpcFwiO1xuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlyUGxhbmVcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuXG4gICAgICAgICAgICBjYXNlIFwiVGFua1wiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJTaGlwXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgyKTtcblxuICAgICAgICAgICAgY2FzZSBcIkFpclBsYW5lXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSg0KTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBcInVua25vd24gZW51bSA6XCIgKyB2YWw7XG4gICAgICAgIH1cbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMuQ2FyZEpvYiA9IENhcmRKb2I7XG5cbnZhciBPcmRlciA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5YID0gMDtcblxuICAgICAgICB0aGlzLlkgPSAwO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIF9fZmllbGRzID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuWCA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuWSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSh0aGlzLlgpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSh0aGlzLlkpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLk9yZGVyID0gT3JkZXI7XG5cbnZhciBDYXJkU3RhdGUgPSB7XG5cbiAgICBMaXZpbmdDYXJkOiAxLFxuXG4gICAgRGVhZENhcmQ6IDIsXG5cbiAgICBIYW5kQ2FyZDogNCxcblxuICAgIERlY2tDYXJkOiA4LFxuXG4gICAgUGxheVNraWxsOiAxNixcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2aW5nQ2FyZFwiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVhZENhcmRcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhhbmRDYXJkXCI7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZWNrQ2FyZFwiO1xuXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYXlTa2lsbFwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJMaXZpbmdDYXJkXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxKTtcblxuICAgICAgICAgICAgY2FzZSBcIkRlYWRDYXJkXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgyKTtcblxuICAgICAgICAgICAgY2FzZSBcIkhhbmRDYXJkXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSg0KTtcblxuICAgICAgICAgICAgY2FzZSBcIkRlY2tDYXJkXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSg4KTtcblxuICAgICAgICAgICAgY2FzZSBcIlBsYXlTa2lsbFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMTYpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IFwidW5rbm93biBlbnVtIDpcIiArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5DYXJkU3RhdGUgPSBDYXJkU3RhdGU7XG5cbnZhciBQbGF5ZXIgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5SZXNvdXJjZXMgPSBbXTtcblxuICAgICAgICB0aGlzLkNhcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5DYXJkR3JvdXBzID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5OYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuUmVzb3VyY2VzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IFJlc291cmNlLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5SZXNvdXJjZXNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdmFyIG1heDMgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgICAgICB0aGlzLkNhcmRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSAwO1xuXG4gICAgICAgICAgICAgICAgdjMgPSByZWFkZXIucmVhZFVJbnQ2NCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5DYXJkc1tpM10gPSB2MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgICAgIHRoaXMuQ2FyZEdyb3VwcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHYzID0ge307XG5cbiAgICAgICAgICAgICAgICB2MyA9IG5ldyBDYXJkR3JvdXAuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkNhcmRHcm91cHNbaTNdID0gdjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoNCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuU3RyaW5nKTtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuTmFtZSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuVGFibGUgPDwgNCB8IFRhZy5MaXN0KTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDE2KHRoaXMuUmVzb3VyY2VzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuUmVzb3VyY2VzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICBSZXNvdXJjZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5SZXNvdXJjZXNbdjNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk2NCA8PCA0IHwgVGFnLkxpc3QpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5DYXJkcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIHYzID0gMDsgdjMgPCB0aGlzLkNhcmRzLmxlbmd0aDsgdjMrKykge1xuXG4gICAgICAgICAgICB3cml0ZXIud3JpdGVVSW50NjQodGhpcy5DYXJkc1t2M10pO1xuICAgICAgICB9XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuVGFibGUgPDwgNCB8IFRhZy5MaXN0KTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDE2KHRoaXMuQ2FyZEdyb3Vwcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIHYzID0gMDsgdjMgPCB0aGlzLkNhcmRHcm91cHMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIENhcmRHcm91cC5fX3dyaXRlKHdyaXRlciwgdGhpcy5DYXJkR3JvdXBzW3YzXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwMjI1Mm9WaTBSTkQ0UUp2azFhbC9KZScsICdjb20uZ3NycGMudGVzdCcpO1xuLy8gc2NyaXB0c1xcZ2VuXFxjb20uZ3NycGMudGVzdC5qc1xuXG5cblxudmFyIEtWID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLktleSA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5WYWx1ZSA9IFwiXCI7XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5LZXkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVmFsdWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlN0cmluZyk7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLktleSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuU3RyaW5nKTtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuVmFsdWUpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLktWID0gS1Y7XG5cbnZhciBUaW1lVW5pdCA9IHtcblxuICAgIFNlY29uZDogMCxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Vjb25kXCI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcblxuICAgICAgICAgICAgY2FzZSBcIlNlY29uZFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMCk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLlRpbWVVbml0ID0gVGltZVVuaXQ7XG5cbnZhciBEdXJhdGlvbiA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5WYWx1ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5Vbml0ID0gXCJTZWNvbmRcIjtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlZhbHVlID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuVW5pdCA9IFRpbWVVbml0Ll9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkkzMik7XG4gICAgICAgIHdyaXRlci53cml0ZUludDMyKHRoaXMuVmFsdWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4KTtcbiAgICAgICAgVGltZVVuaXQuX193cml0ZSh3cml0ZXIsIHRoaXMuVW5pdCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuRHVyYXRpb24gPSBEdXJhdGlvbjtcblxudmFyIFJlbW90ZUV4Y2VwdGlvbiA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuUmVtb3RlRXhjZXB0aW9uID0gUmVtb3RlRXhjZXB0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cy5SRVNUZnVsID0ge1xuICAgIHJwYzogZnVuY3Rpb24gcnBjKGNoYW5uZWwsIGlkKSB7XG4gICAgICAgIHRoaXMuX2NoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuXG4gICAgICAgIHRoaXMuUG9zdCA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG5cbiAgICAgICAgdGhpcy5HZXQgPSBmdW5jdGlvbiAoYXJnMCwgY2FsbGJhY2ssIHRpbWVvdXQpIHt9O1xuXG4gICAgICAgIHRoaXMuU2F5SGVsbG8gPSBmdW5jdGlvbiAoYXJnMCkge307XG4gICAgfVxufTtcblxudmFyIEJsb2NrID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLkNvbnRlbnQgPSBbXTtcblxuICAgICAgICB0aGlzLktWID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5Db250ZW50ID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gMTI4O1xuXG4gICAgICAgICAgICB0aGlzLktWID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gMTI7XG5cbiAgICAgICAgICAgICAgICB2MyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaTQgPSAwOyBpNCA8IG1heDQ7IGk0KyspIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdjQgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICB2NCA9IG5ldyBLVi5fX3JlYWQocmVhZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICB2M1tpNF0gPSB2NDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLktWW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDIpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk4IDw8IDQgfCBUYWcuTGlzdCk7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGVzKHRoaXMuQ29udGVudCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgoVGFnLlRhYmxlIDw8IDQgfCBUYWcuTGlzdCkgPDwgNCB8IFRhZy5MaXN0KTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDE2KHRoaXMuS1YubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciB2MyA9IDA7IHYzIDwgdGhpcy5LVi5sZW5ndGg7IHYzKyspIHtcblxuICAgICAgICAgICAgd3JpdGVyLndyaXRlVUludDE2KHRoaXMuS1ZbdjNdLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHY0ID0gMDsgdjQgPCB0aGlzLktWW3YzXS5sZW5ndGg7IHY0KyspIHtcblxuICAgICAgICAgICAgICAgIEtWLl9fd3JpdGUod3JpdGVyLCB0aGlzLktWW3YzXVt2NF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuQmxvY2sgPSBCbG9jaztcblxudmFyIE5vdEZvdW5kID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHt9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgwKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5Ob3RGb3VuZCA9IE5vdEZvdW5kO1xuXG52YXIgUmVzb3VyY2VFcnJvciA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuUmVzb3VyY2VFcnJvciA9IFJlc291cmNlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzLlJFU1RmdWxsID0ge1xuICAgIHJwYzogZnVuY3Rpb24gcnBjKGNoYW5uZWwsIGlkKSB7XG4gICAgICAgIHRoaXMuX2NoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuXG4gICAgICAgIHRoaXMuR2V0ID0gZnVuY3Rpb24gKGFyZzAsIGNhbGxiYWNrLCB0aW1lb3V0KSB7fTtcblxuICAgICAgICB0aGlzLlB1dCA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBjYWxsYmFjaywgdGltZW91dCkge307XG4gICAgfVxufTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Q3NmU5bVJFTVZNQWJIRG9MTHN5N2U3JywgJ2NvbS5nc3JwYy50cmFjZScpO1xuLy8gc2NyaXB0c1xcZ2VuXFxjb20uZ3NycGMudHJhY2UuanNcblxudmFyIEtWID0gcmVxdWlyZShcIi4vY29tLmdzcnBjXCIpLktWO1xuXG52YXIgRXZ0UlBDID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLlRyYWNlID0gMDtcblxuICAgICAgICB0aGlzLklEID0gMDtcblxuICAgICAgICB0aGlzLlByZXYgPSAwO1xuXG4gICAgICAgIHRoaXMuUHJvYmUgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuU3RhcnRUaW1lID0ge307XG5cbiAgICAgICAgdGhpcy5FbmRUaW1lID0ge307XG5cbiAgICAgICAgdGhpcy5BdHRyaWJ1dGVzID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5UcmFjZSA9IHJlYWRlci5yZWFkVUludDY0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5JRCA9IHJlYWRlci5yZWFkVUludDMyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS1fX2ZpZWxkcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgaWYgKHRhZyAhPSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgdGhpcy5QcmV2ID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlByb2JlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgtLV9fZmllbGRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBpZiAodGFnICE9IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICB0aGlzLlN0YXJ0VGltZSA9IG5ldyBUaW1lLl9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHRoaXMuRW5kVGltZSA9IG5ldyBUaW1lLl9fcmVhZChyZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGlmICh0YWcgIT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgIHZhciBtYXgzID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICAgICAgdGhpcy5BdHRyaWJ1dGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHYzID0gbmV3IEtWLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5BdHRyaWJ1dGVzW2kzXSA9IHYzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC0tX19maWVsZHMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX2ZpZWxkczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YWcgPT0gVGFnLlNraXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTa2lwKHRhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKDcpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLkk2NCk7XG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQ2NCh0aGlzLlRyYWNlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5JMzIpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MzIodGhpcy5JRCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuSTMyKTtcbiAgICAgICAgd3JpdGVyLndyaXRlVUludDMyKHRoaXMuUHJldik7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZShUYWcuU3RyaW5nKTtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuUHJvYmUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlKTtcbiAgICAgICAgVGltZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5TdGFydFRpbWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoVGFnLlRhYmxlKTtcbiAgICAgICAgVGltZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5FbmRUaW1lKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKFRhZy5UYWJsZSA8PCA0IHwgVGFnLkxpc3QpO1xuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5BdHRyaWJ1dGVzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuQXR0cmlidXRlcy5sZW5ndGg7IHYzKyspIHtcblxuICAgICAgICAgICAgS1YuX193cml0ZSh3cml0ZXIsIHRoaXMuQXR0cmlidXRlc1t2M10pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuRXZ0UlBDID0gRXZ0UlBDO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMWRjMjBvbm9yNUF0cHV2cld6M2hQeEcnLCAnY29tLmdzcnBjJyk7XG4vLyBzY3JpcHRzXFxnZW5cXGNvbS5nc3JwYy5qc1xuXG5cblxudmFyIE5hbWVkU2VydmljZSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5OYW1lID0gXCJcIjtcblxuICAgICAgICB0aGlzLkRpc3BhdGNoSUQgPSAwO1xuXG4gICAgICAgIHRoaXMuVk5vZGVzID0gMDtcblxuICAgICAgICB0aGlzLk5vZGVOYW1lID0gXCJcIjtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG5cbiAgICAgICAgdGhpcy5OYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLkRpc3BhdGNoSUQgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgIHRoaXMuVk5vZGVzID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcblxuICAgICAgICB0aGlzLk5vZGVOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuXG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLk5hbWUpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLkRpc3BhdGNoSUQpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLlZOb2Rlcyk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuTm9kZU5hbWUpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLk5hbWVkU2VydmljZSA9IE5hbWVkU2VydmljZTtcblxudmFyIFR1bm5lbFdob0FtSSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5TZXJ2aWNlcyA9IFtdO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcblxuICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgdGhpcy5TZXJ2aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkzID0gMDsgaTMgPCBtYXgzOyBpMysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2MyA9IHt9O1xuXG4gICAgICAgICAgICB2MyA9IG5ldyBOYW1lZFNlcnZpY2UuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgIHRoaXMuU2VydmljZXNbaTNdID0gdjM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlNlcnZpY2VzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgdjMgPSAwOyB2MyA8IHRoaXMuU2VydmljZXMubGVuZ3RoOyB2MysrKSB7XG5cbiAgICAgICAgICAgIE5hbWVkU2VydmljZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5TZXJ2aWNlc1t2M10pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuVHVubmVsV2hvQW1JID0gVHVubmVsV2hvQW1JO1xuXG52YXIgVHVubmVsID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHtcblxuICAgICAgICB0aGlzLklEID0ge307XG5cbiAgICAgICAgdGhpcy5NZXNzYWdlID0ge307XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuXG4gICAgICAgIHRoaXMuSUQgPSBuZXcgRGV2aWNlLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgIHRoaXMuTWVzc2FnZSA9IG5ldyBNZXNzYWdlLl9fcmVhZChyZWFkZXIpO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG5cbiAgICAgICAgRGV2aWNlLl9fd3JpdGUod3JpdGVyLCB0aGlzLklEKTtcblxuICAgICAgICBNZXNzYWdlLl9fd3JpdGUod3JpdGVyLCB0aGlzLk1lc3NhZ2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLlR1bm5lbCA9IFR1bm5lbDtcblxudmFyIFVubWFyc2hhbEV4Y2VwdGlvbiA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuVW5tYXJzaGFsRXhjZXB0aW9uID0gVW5tYXJzaGFsRXhjZXB0aW9uO1xuXG52YXIgTWVzc2FnZSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5Db2RlID0gXCJIZWFydGJlYXRcIjtcblxuICAgICAgICB0aGlzLkFnZW50ID0gMDtcblxuICAgICAgICB0aGlzLkNvbnRlbnQgPSBbXTtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG5cbiAgICAgICAgdGhpcy5Db2RlID0gQ29kZS5fX3JlYWQocmVhZGVyKTtcblxuICAgICAgICB0aGlzLkFnZW50ID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgdGhpcy5Db250ZW50ID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG5cbiAgICAgICAgQ29kZS5fX3dyaXRlKHdyaXRlciwgdGhpcy5Db2RlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlKHRoaXMuQWdlbnQpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGVzKHRoaXMuQ29udGVudCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuTWVzc2FnZSA9IE1lc3NhZ2U7XG5cbnZhciBPU1R5cGUgPSB7XG5cbiAgICBXaW5kb3dzOiAwLFxuXG4gICAgTGludXg6IDEsXG5cbiAgICBPU1g6IDIsXG5cbiAgICBXUDogMyxcblxuICAgIEFuZHJvaWQ6IDQsXG5cbiAgICBpT1M6IDUsXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldpbmRvd3NcIjtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbnV4XCI7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPU1hcIjtcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldQXCI7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbmRyb2lkXCI7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJT1NcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuXG4gICAgICAgICAgICBjYXNlIFwiV2luZG93c1wiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJMaW51eFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJPU1hcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDIpO1xuXG4gICAgICAgICAgICBjYXNlIFwiV1BcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDMpO1xuXG4gICAgICAgICAgICBjYXNlIFwiQW5kcm9pZFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoNCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJJT1NcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDUpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IFwidW5rbm93biBlbnVtIDpcIiArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5PU1R5cGUgPSBPU1R5cGU7XG5cbnZhciBBcmNoVHlwZSA9IHtcblxuICAgIFg4NjogMCxcblxuICAgIFg2NDogMSxcblxuICAgIEFSTTogMixcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWDg2XCI7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJYNjRcIjtcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFSTVwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJYODZcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDApO1xuXG4gICAgICAgICAgICBjYXNlIFwiWDY0XCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxKTtcblxuICAgICAgICAgICAgY2FzZSBcIkFSTVwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLkFyY2hUeXBlID0gQXJjaFR5cGU7XG5cbnZhciBDb2RlID0ge1xuXG4gICAgSGVhcnRiZWF0OiAwLFxuXG4gICAgV2hvQW1JOiAxLFxuXG4gICAgUmVxdWVzdDogMixcblxuICAgIFJlc3BvbnNlOiAzLFxuXG4gICAgQWNjZXB0OiA0LFxuXG4gICAgUmVqZWN0OiA1LFxuXG4gICAgVHVubmVsOiA2LFxuXG4gICAgVHVubmVsV2hvQW1JOiA3LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBjb2RlID0gcmVhZGVyLnJlYWRCeXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFydGJlYXRcIjtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldob0FtSVwiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVxdWVzdFwiO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzcG9uc2VcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjY2VwdFwiO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVqZWN0XCI7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdW5uZWxcIjtcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1bm5lbFdob0FtSVwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJIZWFydGJlYXRcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDApO1xuXG4gICAgICAgICAgICBjYXNlIFwiV2hvQW1JXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxKTtcblxuICAgICAgICAgICAgY2FzZSBcIlJlcXVlc3RcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDIpO1xuXG4gICAgICAgICAgICBjYXNlIFwiUmVzcG9uc2VcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDMpO1xuXG4gICAgICAgICAgICBjYXNlIFwiQWNjZXB0XCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSg0KTtcblxuICAgICAgICAgICAgY2FzZSBcIlJlamVjdFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoNSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJUdW5uZWxcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVCeXRlKDYpO1xuXG4gICAgICAgICAgICBjYXNlIFwiVHVubmVsV2hvQW1JXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSg3KTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBcInVua25vd24gZW51bSA6XCIgKyB2YWw7XG4gICAgICAgIH1cbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMuQ29kZSA9IENvZGU7XG5cbnZhciBQYXJhbSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5Db250ZW50ID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuXG4gICAgICAgIHRoaXMuQ29udGVudCA9IHJlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGVzKHRoaXMuQ29udGVudCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuUGFyYW0gPSBQYXJhbTtcblxudmFyIEludmFsaWRDb250cmFjdCA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7fSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgX19maWVsZHMgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9fZmllbGRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIucmVhZEJ5dGUoKTtcblxuICAgICAgICAgICAgaWYgKHRhZyA9PSBUYWcuU2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZFNraXAodGFnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGUoMCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuSW52YWxpZENvbnRyYWN0ID0gSW52YWxpZENvbnRyYWN0O1xuXG52YXIgUmVxdWVzdCA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5JRCA9IDA7XG5cbiAgICAgICAgdGhpcy5TZXJ2aWNlID0gMDtcblxuICAgICAgICB0aGlzLk1ldGhvZCA9IDA7XG5cbiAgICAgICAgdGhpcy5QYXJhbXMgPSBbXTtcblxuICAgICAgICB0aGlzLlRyYWNlID0gMDtcblxuICAgICAgICB0aGlzLlByZXYgPSAwO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcblxuICAgICAgICB0aGlzLklEID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcblxuICAgICAgICB0aGlzLlNlcnZpY2UgPSByZWFkZXIucmVhZFVJbnQxNigpO1xuXG4gICAgICAgIHRoaXMuTWV0aG9kID0gcmVhZGVyLnJlYWRVSW50MTYoKTtcblxuICAgICAgICB2YXIgbWF4MyA9IHJlYWRlci5yZWFkVUludDE2KCk7XG5cbiAgICAgICAgdGhpcy5QYXJhbXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpMyA9IDA7IGkzIDwgbWF4MzsgaTMrKykge1xuXG4gICAgICAgICAgICB2YXIgdjMgPSB7fTtcblxuICAgICAgICAgICAgdjMgPSBuZXcgUGFyYW0uX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgICAgIHRoaXMuUGFyYW1zW2kzXSA9IHYzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5UcmFjZSA9IHJlYWRlci5yZWFkVUludDY0KCk7XG5cbiAgICAgICAgdGhpcy5QcmV2ID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQzMih0aGlzLklEKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5TZXJ2aWNlKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVVSW50MTYodGhpcy5NZXRob2QpO1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQxNih0aGlzLlBhcmFtcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIHYzID0gMDsgdjMgPCB0aGlzLlBhcmFtcy5sZW5ndGg7IHYzKyspIHtcblxuICAgICAgICAgICAgUGFyYW0uX193cml0ZSh3cml0ZXIsIHRoaXMuUGFyYW1zW3YzXSk7XG4gICAgICAgIH1cblxuICAgICAgICB3cml0ZXIud3JpdGVVSW50NjQodGhpcy5UcmFjZSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlVUludDMyKHRoaXMuUHJldik7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbnZhciBSZXNwb25zZSA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5JRCA9IDA7XG5cbiAgICAgICAgdGhpcy5FeGNlcHRpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuQ29udGVudCA9IFtdO1xuXG4gICAgICAgIHRoaXMuVHJhY2UgPSAwO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcblxuICAgICAgICB0aGlzLklEID0gcmVhZGVyLnJlYWRVSW50MzIoKTtcblxuICAgICAgICB0aGlzLkV4Y2VwdGlvbiA9IHJlYWRlci5yZWFkU0J5dGUoKTtcblxuICAgICAgICB0aGlzLkNvbnRlbnQgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG5cbiAgICAgICAgdGhpcy5UcmFjZSA9IHJlYWRlci5yZWFkVUludDY0KCk7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcblxuICAgICAgICB3cml0ZXIud3JpdGVVSW50MzIodGhpcy5JRCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlU0J5dGUodGhpcy5FeGNlcHRpb24pO1xuXG4gICAgICAgIHdyaXRlci53cml0ZUJ5dGVzKHRoaXMuQ29udGVudCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlVUludDY0KHRoaXMuVHJhY2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbnZhciBEZXZpY2UgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuSUQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuVHlwZSA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5BcmNoID0gXCJYODZcIjtcblxuICAgICAgICB0aGlzLk9TID0gXCJXaW5kb3dzXCI7XG5cbiAgICAgICAgdGhpcy5PU1ZlcnNpb24gPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuQXBwS2V5ID0gXCJcIjtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG5cbiAgICAgICAgdGhpcy5JRCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5UeXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLkFyY2ggPSBBcmNoVHlwZS5fX3JlYWQocmVhZGVyKTtcblxuICAgICAgICB0aGlzLk9TID0gT1NUeXBlLl9fcmVhZChyZWFkZXIpO1xuXG4gICAgICAgIHRoaXMuT1NWZXJzaW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLkFwcEtleSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcblxuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5JRCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKHRoaXMuVHlwZSk7XG5cbiAgICAgICAgQXJjaFR5cGUuX193cml0ZSh3cml0ZXIsIHRoaXMuQXJjaCk7XG5cbiAgICAgICAgT1NUeXBlLl9fd3JpdGUod3JpdGVyLCB0aGlzLk9TKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcodGhpcy5PU1ZlcnNpb24pO1xuXG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyh0aGlzLkFwcEtleSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuRGV2aWNlID0gRGV2aWNlO1xuXG52YXIgUmVtb3RlRXhjZXB0aW9uID0ge1xuICAgIF9fbmV3OiBmdW5jdGlvbiBfX25ldygpIHt9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG4gICAgICAgIHZhciBfX2ZpZWxkcyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19maWVsZHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFnID09IFRhZy5Ta2lwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkU2tpcCh0YWcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZSgwKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5SZW1vdGVFeGNlcHRpb24gPSBSZW1vdGVFeGNlcHRpb247XG5cbnZhciBLViA9IHtcbiAgICBfX25ldzogZnVuY3Rpb24gX19uZXcoKSB7XG5cbiAgICAgICAgdGhpcy5LZXkgPSBbXTtcblxuICAgICAgICB0aGlzLlZhbHVlID0gW107XG4gICAgfSxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuXG4gICAgICAgIHRoaXMuS2V5ID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuXG4gICAgICAgIHRoaXMuVmFsdWUgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgfSxcblxuICAgIF9fd3JpdGU6IGZ1bmN0aW9uIF9fd3JpdGUod3JpdGVyLCB2YWwpIHtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlcyh0aGlzLktleSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlQnl0ZXModGhpcy5WYWx1ZSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuS1YgPSBLVjtcblxudmFyIFRpbWUgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuU2Vjb25kID0gMDtcblxuICAgICAgICB0aGlzLk5hbm8gPSAwO1xuICAgIH0sXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcblxuICAgICAgICB0aGlzLlNlY29uZCA9IHJlYWRlci5yZWFkVUludDY0KCk7XG5cbiAgICAgICAgdGhpcy5OYW5vID0gcmVhZGVyLnJlYWRVSW50NjQoKTtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuXG4gICAgICAgIHdyaXRlci53cml0ZVVJbnQ2NCh0aGlzLlNlY29uZCk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlVUludDY0KHRoaXMuTmFubyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuVGltZSA9IFRpbWU7XG5cbnZhciBTdGF0ZSA9IHtcblxuICAgIERpc2Nvbm5lY3Q6IDAsXG5cbiAgICBDb25uZWN0aW5nOiAxLFxuXG4gICAgQ29ubmVjdGVkOiAyLFxuXG4gICAgRGlzY29ubmVjdGluZzogMyxcblxuICAgIENsb3NlZDogNCxcblxuICAgIF9fcmVhZDogZnVuY3Rpb24gX19yZWFkKHJlYWRlcikge1xuICAgICAgICB2YXIgY29kZSA9IHJlYWRlci5yZWFkQnl0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGlzY29ubmVjdFwiO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29ubmVjdGluZ1wiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29ubmVjdGVkXCI7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjb25uZWN0aW5nXCI7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDbG9zZWRcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuXG4gICAgICAgICAgICBjYXNlIFwiRGlzY29ubmVjdFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJDb25uZWN0aW5nXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgxKTtcblxuICAgICAgICAgICAgY2FzZSBcIkNvbm5lY3RlZFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoMik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJEaXNjb25uZWN0aW5nXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlQnl0ZSgzKTtcblxuICAgICAgICAgICAgY2FzZSBcIkNsb3NlZFwiOlxuICAgICAgICAgICAgICAgIHdyaXRlci5Xcml0ZUJ5dGUoNCk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJ1bmtub3duIGVudW0gOlwiICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzLlN0YXRlID0gU3RhdGU7XG5cbnZhciBUYWcgPSB7XG5cbiAgICBJODogMCxcblxuICAgIEkxNjogMSxcblxuICAgIEkzMjogMixcblxuICAgIEk2NDogMyxcblxuICAgIExpc3Q6IDQsXG5cbiAgICBUYWJsZTogNSxcblxuICAgIFN0cmluZzogNixcblxuICAgIFNraXA6IDcsXG5cbiAgICBfX3JlYWQ6IGZ1bmN0aW9uIF9fcmVhZChyZWFkZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSByZWFkZXIucmVhZFVJbnQzMigpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSThcIjtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkkxNlwiO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSTMyXCI7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJNjRcIjtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpc3RcIjtcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhYmxlXCI7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdHJpbmdcIjtcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNraXBcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgX193cml0ZTogZnVuY3Rpb24gX193cml0ZSh3cml0ZXIsIHZhbCkge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuXG4gICAgICAgICAgICBjYXNlIFwiSThcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJJMTZcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJJMzJcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJJNjRcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoMyk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJMaXN0XCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlVUludDMyKDQpO1xuXG4gICAgICAgICAgICBjYXNlIFwiVGFibGVcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoNSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICB3cml0ZXIuV3JpdGVVSW50MzIoNik7XG5cbiAgICAgICAgICAgIGNhc2UgXCJTa2lwXCI6XG4gICAgICAgICAgICAgICAgd3JpdGVyLldyaXRlVUludDMyKDcpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IFwidW5rbm93biBlbnVtIDpcIiArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5UYWcgPSBUYWc7XG5cbnZhciBXaG9BbUkgPSB7XG4gICAgX19uZXc6IGZ1bmN0aW9uIF9fbmV3KCkge1xuXG4gICAgICAgIHRoaXMuSUQgPSB7fTtcblxuICAgICAgICB0aGlzLkNvbnRleHQgPSBbXTtcbiAgICB9LFxuXG4gICAgX19yZWFkOiBmdW5jdGlvbiBfX3JlYWQocmVhZGVyKSB7XG5cbiAgICAgICAgdGhpcy5JRCA9IG5ldyBEZXZpY2UuX19yZWFkKHJlYWRlcik7XG5cbiAgICAgICAgdGhpcy5Db250ZXh0ID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgIH0sXG5cbiAgICBfX3dyaXRlOiBmdW5jdGlvbiBfX3dyaXRlKHdyaXRlciwgdmFsKSB7XG5cbiAgICAgICAgRGV2aWNlLl9fd3JpdGUod3JpdGVyLCB0aGlzLklEKTtcblxuICAgICAgICB3cml0ZXIud3JpdGVCeXRlcyh0aGlzLkNvbnRleHQpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLldob0FtSSA9IFdob0FtSTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzg0Mjczdy9FZ0pEaFptZnc5OEJtOUV2JywgJ2pzcnBjJyk7XG4vLyBzY3JpcHRzXFxqc3JwY1xcanNycGMuanNcblxubW9kdWxlLmV4cG9ydHMuY2xpZW50ID0ge1xuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIGNvbm5lY3QodXJsLCBjb25maWcpIHtcblxuICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50c2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHdzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG4gICAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgb3BlblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IHJlY3ZcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgb25lcnJvcjpcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgb25jbG9zZSA6XCIgKyBldmVudC5jb2RlICsgXCIgXCIgKyBldmVudC5yZWFzb24pO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlnLnJlY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRzZWxmLmNvbm5lY3QodXJsLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIH0sIGNvbmZpZy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzQ0MzlndTFHZEhQcG5UMDJkTlRFdjEnLCAnbWFpbicpO1xuLy8gc2NyaXB0c1xcbWFpbi5qc1xuXG52YXIganNycGMgPSByZXF1aXJlKFwiLi9qc3JwYy9qc3JwY1wiKTtcbnZhciBnc3JwYyA9IHJlcXVpcmUoXCIuL2dlbi9jb20uZ3NycGNcIik7XG5cbmNvbnNvbGUubG9nKGV4cG9ydHMudGVzdCk7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdmFyIG5zID0gbmV3IGdzcnBjLk5hbWVkU2VydmljZS5fX25ldygpO1xuXG4gICAgICAgIGpzcnBjLmNsaWVudC5jb25uZWN0KFwid3M6Ly8xMjcuMC4wLjE6MTM1MTcvYXBpXCIsIHtcbiAgICAgICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiXX0=
