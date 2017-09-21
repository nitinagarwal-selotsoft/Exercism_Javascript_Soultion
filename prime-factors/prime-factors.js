var primeFactors = function(){};

primeFactors.prototype.for = function(input){
    var value = [];
   var i =2;
   while(input != 1){
       if (input <= i){
            value.push(input);
            return value;
       } else{
                if(input % i === 0){
                input = input/i;
                value.push(i);
                i = 2;
                } else {
                    i++;
                }
       }
    } 
   return value;

};
var a = new primeFactors();
module.exports = a;