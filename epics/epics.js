/*
	EPICS Node, Copyright 2015 Laurence Stant (SandyLabs)
	MIT License (see license.txt for source)
*/

module.exports = function(RED) {
    function EpicsInNode(config) {
	var epics = require('epics');
        RED.nodes.createNode(this,config);
        var node = this;
	this.pv = new epics.Channel(config.pv);
	this.status({fill:"green",shape:"dot",text:"connected"});
        this.on('close', function() {
            this.pv.disconnect();
        });
        this.pv.on('value', function(data) {
	    var msg = {payload: data, pv: config.pv};
            node.send(msg);
        });
	this.pv.connect(function() {
	    node.pv.monitor();
	});
    }
    RED.nodes.registerType("epics in",EpicsInNode);

    function EpicsOutNode(config) {
	var epics = require('epics');
        RED.nodes.createNode(this,config);
        var node = this;
	this.pv = new epics.Channel(config.pv);
        this.pv.connect();
	this.status({fill:"green",shape:"dot",text:"connected"});
        this.on('close', function() {
            this.pv.disconnect();
        });
        this.on('input', function(msg) {
	    this.pv.put(parseInt(msg.payload));
        });
    }
    RED.nodes.registerType("epics out",EpicsOutNode);
}
