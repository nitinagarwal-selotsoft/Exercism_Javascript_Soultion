//WIP(work in process) : not completed yet
var Cipher = function(key){
    if(key != undefined && key !=key.match(/^[a-z]+$/)){
        throw new Error("Bad key");
    }
    this.key = key || "aaaaaaaaaa";
};

Cipher.prototype.encode = function(value){
    if(value == this.key){
        return this.key;
    }
    
    
    
};

Cipher.prototype.decode = function(result){
    if(this.key == result){
        return result;
    }
    
   

};
module.exports = Cipher;