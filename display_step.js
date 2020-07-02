module.exports = function(RED) {

    // "use strict";



    function display_stepNode(config) {
        RED.nodes.createNode(this, config);
        this.step = config.step


        var node = this

        node.on('input', function(msg, send, done) {

            // substitua a variavel msg pela a informação desejada a ser passada via serial

            var obj = {
                payload: {
                    "type": "processing_modular_V1.0",
                    "slot": 1,
                    "compare": {},
                    "method": "display_step",
                    "step": node.step
                }
            }
            send(obj)

        });

    }

    // nome do modulo
    RED.nodes.registerType("display_step", display_stepNode);
}