var com_gsrpc_Device = require("./com.gsrpc").com_gsrpc_Device;


var DHKey = {
    __new :function() {
    
        this.P = "";
    
        this.G = "";
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.P = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.G = reader.readString();
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
        writer.writeString(this.P);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.G);
    
    },
}

module.exports.DHKey = DHKey

module.exports.UserBinder = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.BindUser = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.UnbindUser = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
    },
}

var CardState = {
    
    LivingCard : 1,
    
    DeadCard : 2,
    
    HandCard : 4,
    
    DeckCard : 8,
    
    PlaySkill : 16,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
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

    __write : function(writer,val) {
        switch(val)
        {
        
        
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
    },
}
module.exports.CardState = CardState


var AlreadyInBattle = {
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

module.exports.AlreadyInBattle = AlreadyInBattle

var SkillTarget = {
    
    LivingCard : 1,
    
    DeadCard : 2,
    
    HandCard : 4,
    
    DeckCard : 8,
    
    PlaySkill : 16,
    
    Self : 32,
    
    Enemy : 64,
    
    Tank : 128,
    
    Ship : 256,
    
    AirPlane : 512,
    
    Magic : 1024,
    

    __read : function(reader){
        var code =  reader.readUInt32(); 

        switch(code)
        {
        
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

    __write : function(writer,val) {
        switch(val)
        {
        
        
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
    },
}
module.exports.SkillTarget = SkillTarget


var Battle = {
    __new :function() {
    
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

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Type = BattleType.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.State = BattleState.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Play = reader.readBoolean();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Trick = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.EnemyBlood = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.SelfBlood = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.EnemyHandCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.EnemyHandCards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.SelfHandCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.SelfHandCards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.EnemyLivingCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.EnemyLivingCards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.SelfLivingCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.SelfLivingCards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.EnemyDeadCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.EnemyDeadCards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.SelfDeadCards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Card.__read(reader);

			this.SelfDeadCards[i3] = v3;

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
        writer.writeByte(13);
    
        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);
    
        writer.writeByte(Tag.I8);
        BattleType.__write(writer,this.Type);
    
        writer.writeByte(Tag.I8);
        BattleState.__write(writer,this.State);
    
        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Play);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.Trick);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.EnemyBlood);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.SelfBlood);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.EnemyHandCards.length);

		for(var v3 = 0; v3 < this.EnemyHandCards.length; v3++){

			Card.__write(writer,this.EnemyHandCards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.SelfHandCards.length);

		for(var v3 = 0; v3 < this.SelfHandCards.length; v3++){

			Card.__write(writer,this.SelfHandCards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.EnemyLivingCards.length);

		for(var v3 = 0; v3 < this.EnemyLivingCards.length; v3++){

			Card.__write(writer,this.EnemyLivingCards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.SelfLivingCards.length);

		for(var v3 = 0; v3 < this.SelfLivingCards.length; v3++){

			Card.__write(writer,this.SelfLivingCards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.EnemyDeadCards.length);

		for(var v3 = 0; v3 < this.EnemyDeadCards.length; v3++){

			Card.__write(writer,this.EnemyDeadCards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.SelfDeadCards.length);

		for(var v3 = 0; v3 < this.SelfDeadCards.length; v3++){

			Card.__write(writer,this.SelfDeadCards[v3]);

		}
    
    },
}

module.exports.Battle = Battle


var DrawingResource = {
    __new :function() {
    
        this.ID = 0;
    
        this.Count = 0;
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.ID = reader.readUInt16();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Count = reader.readUInt16();
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
    
        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.ID);
    
        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.Count);
    
    },
}

module.exports.DrawingResource = DrawingResource


var Skill = {
    __new :function() {
    
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

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.ID = reader.readUInt16();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Key = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Source = CardType.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Group = reader.readBoolean();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Target = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Effect = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.EffectValue = reader.readInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Description = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.AssetIcon = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.AssetAnimation = reader.readString();
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
        writer.writeByte(11);
    
        writer.writeByte(Tag.I16);
        writer.writeUInt16(this.ID);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Key);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    
        writer.writeByte(Tag.I8);
        CardType.__write(writer,this.Source);
    
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
    
    },
}

module.exports.Skill = Skill


var CardGroup = {
    __new :function() {
    
        this.Oid = 0;
    
        this.Cards = [];
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.Cards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = 0;

			v3 = reader.readUInt64();

			this.Cards[i3] = v3;

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
    
        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);
    
        writer.writeByte(((Tag.I64 << 4)|Tag.List));
        writer.writeUInt16(this.Cards.length);

		for(var v3 = 0; v3 < this.Cards.length; v3++){

			writer.writeUInt64(this.Cards[v3]);

		}
    
    },
}

module.exports.CardGroup = CardGroup

var BattleState = {
    
    Creating : 1,
    
    Processing : 2,
    
    Win : 4,
    
    Failure : 8,
    
    Offline : 16,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
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

    __write : function(writer,val) {
        switch(val)
        {
        
        
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
    },
}
module.exports.BattleState = BattleState


var UserNotFound = {
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

module.exports.UserNotFound = UserNotFound


var UserAuthFailed = {
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

module.exports.UserAuthFailed = UserAuthFailed

var CardRarity = {
    
    Common : 0,
    
    Rare : 1,
    
    Ultra : 2,
    
    Legendary : 3,
    
    Epic : 4,
    
    Mythic : 5,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
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

    __write : function(writer,val) {
        switch(val)
        {
        
        
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
    },
}
module.exports.CardRarity = CardRarity

var CardType = {
    
    Fighter : 1,
    
    Magic : 2,
    
    Player : 4,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 1:
            return "Fighter";
        
        case 2:
            return "Magic";
        
        case 4:
            return "Player";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Fighter":
             writer.WriteByte(1); 
        
        case "Magic":
             writer.WriteByte(2); 
        
        case "Player":
             writer.WriteByte(4); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.CardType = CardType

var BattleType = {
    
    PVP : 0,
    
    PVE : 1,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 0:
            return "PVP";
        
        case 1:
            return "PVE";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "PVP":
             writer.WriteByte(0); 
        
        case "PVE":
             writer.WriteByte(1); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.BattleType = BattleType


var SetupSkill = {
    __new :function() {
    
        this.ID = "";
    
        this.Locked = false;
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.ID = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Locked = reader.readBoolean();
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
        writer.writeString(this.ID);
    
        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Locked);
    
    },
}

module.exports.SetupSkill = SetupSkill


var Order = {
    __new :function() {
    
        this.X = 0;
    
        this.Y = 0;
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.X = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Y = reader.readByte();
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
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.X);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.Y);
    
    },
}

module.exports.Order = Order


var CardTemplate = {
    __new :function() {
    
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

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.ID = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.CardID = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Type = CardType.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Job = CardJob.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Race = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Rarity = CardRarity.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Grade = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Power = reader.readByte();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.Skills = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new SetupSkill.__read(reader);

			this.Skills[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Tradable = reader.readBoolean();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Evolvable = reader.readBoolean();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.EvolveDrawing = new DrawingResource.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.EvolveMoney = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.EvolveResources = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Resource.__read(reader);

			this.EvolveResources[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.RemoveGetDrawing = new DrawingResource.__read(reader);
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.RemoveCostMoney = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.RemoveGetResources = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Resource.__read(reader);

			this.RemoveGetResources[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Description = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Asset = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Order = new Order.__read(reader);
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
        writer.writeByte(21);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.ID);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.CardID);
    
        writer.writeByte(Tag.I8);
        CardType.__write(writer,this.Type);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    
        writer.writeByte(Tag.I8);
        CardJob.__write(writer,this.Job);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Race);
    
        writer.writeByte(Tag.I8);
        CardRarity.__write(writer,this.Rarity);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.Grade);
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.Power);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.Skills.length);

		for(var v3 = 0; v3 < this.Skills.length; v3++){

			SetupSkill.__write(writer,this.Skills[v3]);

		}
    
        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Tradable);
    
        writer.writeByte(Tag.I8);
        writer.writeBoolean(this.Evolvable);
    
        writer.writeByte(Tag.Table);
        DrawingResource.__write(writer,this.EvolveDrawing);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.EvolveMoney);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.EvolveResources.length);

		for(var v3 = 0; v3 < this.EvolveResources.length; v3++){

			Resource.__write(writer,this.EvolveResources[v3]);

		}
    
        writer.writeByte(Tag.Table);
        DrawingResource.__write(writer,this.RemoveGetDrawing);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.RemoveCostMoney);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.RemoveGetResources.length);

		for(var v3 = 0; v3 < this.RemoveGetResources.length; v3++){

			Resource.__write(writer,this.RemoveGetResources[v3]);

		}
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Description);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Asset);
    
        writer.writeByte(Tag.Table);
        Order.__write(writer,this.Order);
    
    },
}

module.exports.CardTemplate = CardTemplate


var Card = {
    __new :function() {
    
        this.Oid = 0;
    
        this.Template = 0;
    
        this.EffectSkills = [];
    
        this.Power = 0;
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Oid = reader.readUInt64();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Template = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.EffectSkills = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = 0;

			v3 = reader.readUInt16();

			this.EffectSkills[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Power = reader.readByte();
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
        writer.writeByte(4);
    
        writer.writeByte(Tag.I64);
        writer.writeUInt64(this.Oid);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.Template);
    
        writer.writeByte(((Tag.I16 << 4)|Tag.List));
        writer.writeUInt16(this.EffectSkills.length);

		for(var v3 = 0; v3 < this.EffectSkills.length; v3++){

			writer.writeUInt16(this.EffectSkills[v3]);

		}
    
        writer.writeByte(Tag.I8);
        writer.writeByte(this.Power);
    
    },
}

module.exports.Card = Card


var UserAlreadyLogin = {
    __new :function() {
    
        this.Name = "";
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Name = reader.readString();
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
        writer.writeByte(1);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    
    },
}

module.exports.UserAlreadyLogin = UserAlreadyLogin


var ResourceNotFound = {
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

module.exports.ResourceNotFound = ResourceNotFound

var CardJob = {
    
    Tank : 1,
    
    Ship : 2,
    
    AirPlane : 4,
    

    __read : function(reader){
        var code =  reader.readByte(); 

        switch(code)
        {
        
        case 1:
            return "Tank";
        
        case 2:
            return "Ship";
        
        case 4:
            return "AirPlane";
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        case "Tank":
             writer.WriteByte(1); 
        
        case "Ship":
             writer.WriteByte(2); 
        
        case "AirPlane":
             writer.WriteByte(4); 
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.CardJob = CardJob


var Resource = {
    __new :function() {
    
        this.Name = "";
    
        this.From = 0;
    
        this.To = 0;
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.From = reader.readUInt32();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.To = reader.readUInt32();
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
        writer.writeByte(3);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.From);
    
        writer.writeByte(Tag.I32);
        writer.writeUInt32(this.To);
    
    },
}

module.exports.Resource = Resource

var Action = {
    

    __read : function(reader){
        var code =  reader.readUInt32(); 

        switch(code)
        {
        
        }

        return undefined;
    },

    __write : function(writer,val) {
        switch(val)
        {
        
        
        default:
            throw "unknown enum :" + val;
        }
    },
}
module.exports.Action = Action


var Player = {
    __new :function() {
    
        this.Name = "";
    
        this.Resources = [];
    
        this.Cards = [];
    
        this.CardGroups = [];
    
    },

    __read:function(reader) {
        var __fields = reader.readByte();
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            this.Name = reader.readString();
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.Resources = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new Resource.__read(reader);

			this.Resources[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.Cards = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = 0;

			v3 = reader.readUInt64();

			this.Cards[i3] = v3;

		}
        }

        if(-- __fields == 0) {
            return;
        }
        
        var tag = reader.readByte();

        if(tag != Tag.Skip) {
            var max3 = reader.readUInt16();

		this.CardGroups = [];

		for(var i3 = 0; i3 < max3; i3 ++ ){

			var v3 = {};

			v3 = new CardGroup.__read(reader);

			this.CardGroups[i3] = v3;

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
        writer.writeByte(4);
    
        writer.writeByte(Tag.String);
        writer.writeString(this.Name);
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.Resources.length);

		for(var v3 = 0; v3 < this.Resources.length; v3++){

			Resource.__write(writer,this.Resources[v3]);

		}
    
        writer.writeByte(((Tag.I64 << 4)|Tag.List));
        writer.writeUInt16(this.Cards.length);

		for(var v3 = 0; v3 < this.Cards.length; v3++){

			writer.writeUInt64(this.Cards[v3]);

		}
    
        writer.writeByte(((Tag.Table << 4)|Tag.List));
        writer.writeUInt16(this.CardGroups.length);

		for(var v3 = 0; v3 < this.CardGroups.length; v3++){

			CardGroup.__write(writer,this.CardGroups[v3]);

		}
    
    },
}

module.exports.Player = Player


var BattleReport = {
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

module.exports.BattleReport = BattleReport

module.exports.Auth = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.Login = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.Logoff = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
    },
}

module.exports.Agent = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.GetPlayer = function(callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.StartBattle = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
        this.CancelBattle = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 2;
        }
        
        this.Play = function(arg0, arg1, arg2, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 3;
        }
        
        this.Surrender = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 4;
        }
        
        this.ResumeBattle = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 5;
        }
        
        this.DownloadCardTemplates = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 6;
        }
        
        this.CancelDownloadCardTemplates = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 7;
        }
        
        this.DownloadCards = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 8;
        }
        
        this.DownloadSkills = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 9;
        }
        
        this.CancelDownloadCards = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 10;
        }
        
        this.CardGroups = function(callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 11;
        }
        
    },
}

module.exports.Client = {
    rpc: function(channel,id){
        this._channel = channel;
        this._id      = id;

        
        this.OnBattleReport = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 0;
        }
        
        this.OnResumeBattle = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 1;
        }
        
        this.BeginBattle = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 2;
        }
        
        this.EndBattle = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 3;
        }
        
        this.BeginUpdateCardTemplates = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 4;
        }
        
        this.UpdateCardTemplates = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 5;
        }
        
        this.EndUpdateCardTemplates = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 6;
        }
        
        this.BeginUpdateCards = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 7;
        }
        
        this.UpdateCards = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 8;
        }
        
        this.EndUpdateCards = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 9;
        }
        
        this.BeginUpdateSkills = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 10;
        }
        
        this.UpdateSkills = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 11;
        }
        
        this.EndUpdateSkills = function(arg0, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 12;
        }
        
        this.OnTrickBegin = function(arg0, arg1, arg2, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 13;
        }
        
        this.OnPlayCard = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 14;
        }
        
        this.OnMoveCards = function(arg0, arg1, arg2, arg3, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 15;
        }
        
        this.OnUpdatePower = function(arg0, arg1, arg2, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 16;
        }
        
        this.OnAddSkill = function(arg0, arg1, arg2, arg3, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 17;
        }
        
        this.OnRemoveSkill = function(arg0, arg1, arg2, arg3, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 18;
        }
        
        this.OnTrickEnd = function(arg0, arg1, callback, timeout) {
            var request = new Request.__new();
            request.ServiceID = this._id;
            request.Method = 19;
        }
        
    },
}
