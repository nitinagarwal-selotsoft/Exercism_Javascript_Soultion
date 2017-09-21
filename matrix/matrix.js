function Matrix(input) {
  this.input = input;
  this.rows = this.input.split("\n");
  this.columns = [];
  for (var i = 0; i < this.rows.length; i++){
    this.rows[i] = this.rows[i].split(/\s/);
    for (var j = 0; j < this.rows[i].length; j++){
      this.rows[i][j] = parseInt(this.rows[i][j]);
    }
  };
  var column = [];
  var j = 0;
  while (j < this.rows[0].length){
    for (var i = 0; i < this.rows.length; i++){
      column.push(this.rows[i][j]);
    }
  this.columns.push(column);
  column = [];
  j++;
  };
 
};

module.exports = Matrix;