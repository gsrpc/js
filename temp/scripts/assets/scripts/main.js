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