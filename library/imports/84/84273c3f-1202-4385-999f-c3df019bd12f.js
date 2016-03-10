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