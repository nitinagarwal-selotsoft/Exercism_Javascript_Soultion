var Bob = function(){};

Bob.prototype.hey = function(input){
   
  if(input.match(/[A-Z]/) && input == input.toUpperCase()){
       return "Whoa, chill out!";
   } else if(input.trim().match(/\?$/)){
        return "Sure.";
   } else if(input.trim() == ""){
       return "Fine. Be that way!";
   } else return "Whatever.";
};

module.exports = Bob;