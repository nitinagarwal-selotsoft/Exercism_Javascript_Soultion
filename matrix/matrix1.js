var Matrix = function(input){
    this.input = input;
    this.rows = [];
    this.columns = [];
var result = this.input.split("\n");
   for(var i = 0;i<result.length;i++){
        this.rows[i] = result[i].split(" ").map(function(i){
            return parseInt(i, 10);
        });
        
    }
//console.log(this.rows[0]);
  //  for(var i=0; i<this.rows.length; i++){
  //      for(var j=0; i<this.rows.length; j++){
   //              this.columns.push(this.rows[i][j]);
  //      }
         
    //   }
   
};

module.exports = Matrix;