
/* global Ext */

Ext.define("CardinalKeeper.model.MainMenuItem", {
	
	extend: "Ext.data.TreeModel",
	
	proxy: {
		type: "memory",
		reader: {
			type: "json",
			rootProperty: "children"
		}
	},
	
	fields: [{
		name: "path",
		type: "string"
	}]
	
});