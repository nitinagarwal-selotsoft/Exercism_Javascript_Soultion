var SecretHandshake = function(input){
    if(!input.toString().match(/[0-9]/)){
         throw new Error('Handshake must be a number');
    }else{
        this.input = input;
    }
};

SecretHandshake.prototype.commands = function(){
  var str = this.input;
  var bin = (+str).toString(2);
  bin = bin.toString();
  bin = bin.split('').reverse();
  var str = new Array();
  for(var i = 0;i<bin.length;i++){
      if(bin[i] == 1 && i == 0){
            str.push('wink');
      } if(bin[i] == 1 && i == 1){
            str.push('double blink');
      }if(bin[i] == 1 && i == 2){
            str.push('close your eyes');
      }if(bin[i] == 1 && i == 3){
            str.push('jump');
      }if(bin[i] == 1 && i == 4){
            str.reverse();
      }
  }
  return str;

};

module.exports = SecretHandshake;