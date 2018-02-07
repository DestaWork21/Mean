var _ ={
    map: function(list, callback, mapped=[]){
        if(callback.constructor != Function){
            return "function for a callback is invalid.";
        }
        else if (list.constructor ===Array || list.constructor===object){
            for(var pos in list){
                mapped.push(callback(list[pos]))
            }
            
        }
        else {
            return "object pass is not iterable.";
        }
        return mapped;
    },
    reduce: function(list, callback, initial_val=0){
        if (callback.constructor != Function) {
            return "Function for a callback is invalid.";
        }
        else if (list.constructor != Array) {
            return "Object passed is not an array.";
        }
        var reduced_val;
        if (initial_val != 0) {
            reduced_val = callback(initial_val, list[0]);
        }
        else {
            reduced_val = list[0];
        }
        for (var i = 1; i < list.length; i++) {
            reduced_val = callback(reduced_val, list[i]);
        }
        return reduced_val;
    },
    find: function(list, callback){
        if (callback.constructor != Function) {
            return "Function for a callback is invalid.";
        }
        var found;
        if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                if (callback(list[pos])) {
                    found = list[pos];
                    break;
                }
            }
            return found;
        }
        else {
            return "Object passed is not iterable.";

        }
    },

    filter: function(list, callback, filtered=[]){
        if (callback.constructor != Function) {
            return "Function for a callback is invalid.";
        }
        else if (list.constructor === Array || list.constructor === Object) {
            for (var pos in list) {
                if (callback(list[pos])) {
                    filtered.push(list[pos]);
                }
            }
            return filtered;
        }
        else {
            return "Object passed is not iterable.";
        }
    },
    
    reject: function(list, callback, not_rejected=[]) {
        if (callback.constructor != Function) {
            return "Function for a callback is invalid.";
        }
        else if (list.constructor===Array || list.constructor===Object){
            for (var pos in list) {
                if (!callback(list[pos])) {
                    not_rejected.push(list[pos]);
                }
            }
            return not_rejected;
        }
        else {
            return "The object passed is not iterable.";
       
        }
    }
}
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var odd = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 1; });
console.log(odd); // if things are working right, this will return [1,3,5].
