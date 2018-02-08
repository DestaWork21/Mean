module.exports = function(){
    return {        
        add: function(num1, num2){
            var result = num1 +num2;
            console.log("the addition of num:", result);
            return result;
        },
        multiply: function(num1, num2) {
            var result = num1 * num2;
            console.log("The multiply is:", result);
            return result; 
       },
       square: function(num) {
           var result = num*num;
           console.log("the square is:", result);
           return result;
       },
       random: function(num1, num2) {
           var result = Math.floor(Math.random*num1 +num2);
           console.log("The random number is:", result);
        return result;
       }
    
    }
    
    
};
