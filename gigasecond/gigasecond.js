var Gigasecond = function(input){
    this.input = input;
};

Gigasecond.prototype.date = function(){
var getinput = this.input.getTime();
// in milisecond 10^9 is (1000000000000)
getinput = getinput + 1000000000000;
return date = new Date(getinput);

};

module.exports = Gigasecond;