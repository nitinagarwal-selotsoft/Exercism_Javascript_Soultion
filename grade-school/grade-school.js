var School = function(){
  this.result = {};
};

School.prototype.add = function(name,grade){
  if ( !this.result[grade.toString()]){
      this.result[grade.toString()] = [];
  }
 this.result[grade.toString()].push(name);
 this.result[grade].sort();
};

School.prototype.roster = function(){
   return this.result;
};

School.prototype.grade = function(input){
   if(!this.result[input.toString()]){
       return [];
   }else
        return this.result[input];
};

module.exports = School;