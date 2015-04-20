angular.module('names')
    .factory("myService", [function () {
        return({
            items: [],
            addName: function(name) {
                this.items.push(name);
            }
        })
    }]);