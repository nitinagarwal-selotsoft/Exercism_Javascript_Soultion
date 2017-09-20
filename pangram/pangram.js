var Pangram = function(input){
    this.input = input;
};

Pangram.prototype.isPangram = function(){
var pattern = /([a-z])(?!.*\1)/g;
this.input = this.input.toLowerCase();
if((this.input.match(pattern) || []).length === 26)
{
    return true;
}else return false;

}; 
module.exports = Pangram;