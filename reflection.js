;(function(){
    "use strict";

    var Reflection = function(obj) {
        var obj = obj || {};
        
        this.getProperties = function() {
            var properties = [];
            for (var p in obj) {
                if ( typeof obj[p] != 'function' ) {
                    properties.push(p);
                }
            }
            return properties;
        };

        this.getMethods = function() {
            var methods = [];
            for (var m in obj) {
                if ( typeof obj[m] == 'function' ) {
                    methods.push(m);
                }
            }
            return methods;
        };

        this.getOwnMethods = function() {
            var methods = [];
            for (var m in obj) {
                if ( typeof obj[m] == 'function' && obj.hasOwnProperty(m) ) {
                    methods.push(m);
                }
            }
            return methods;
        };
    };

    window.Reflection = Reflection;
})();