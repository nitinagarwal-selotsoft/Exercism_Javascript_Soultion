var Binary = function(input){
    this.input = input;
};
//function for converting binary number to decimal number
function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }

Binary.prototype.toDecimal = function(){
if(!this.input.match(/^[0-1]*$/)){
     return 0;
} else return bin2dec(this.input);
    };

module.exports = Binary;