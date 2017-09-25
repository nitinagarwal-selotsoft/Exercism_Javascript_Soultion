 /** 
  * var Triangle = function(input){
    var n = input;
    this.rows = {};
    this.lastRow = [];
  if(n == 1){
        this.rows[0] = [1];
    } else if(n == 2){
        this.rows[0] = [1];
        this.rows[1] = [1,1]
    }
    else{
        this.rows[0] = [1];
        this.rows[1] = [1,1]
        for(var i=2;i<n-1;i++){
            for(var j=1;j<=i;j++){
                this.rows[i][j-1] = this.rows[i-1][j] + this.rows[i-1][j-1];
            }
        }
    } **/

    /** 
          if(n == 1){
                    this.rows[i] = [];
                    this.rows[i][i] = 1;
                
                } else if (n == 2){
                    this.rows[i] = [];
                    this.rows[i][i] = 1;
                    this.rows[i++] = [];
                    this.rows[i++][i] = 1;
                    this.rows[i++][i++] = 1;

                
                } else {
                    this.rows[i] = [];
                    this.rows[i][i] = 1;
                    this.rows[i++] = [];
                    this.rows[i++][i] = 1;
                    this.rows[i++][i++] = 1;
                
                for(var i=2;i<n;i++){
                    arr[i] = [];
                    arr[i] [0] = 1;
                    for(var j=1;j< i;j++){
                    
                            this.rows[i][j] = this.undef(this.rows[i-1][j-1]) + this.undef(this.rows[i-1][j]);
                        }
                        
            };
        }**/

        
    /**    for(var row = 0; row < n; row++ ){
            this.rows[row] = [];
            for(var col = 0;col < row+1; col++){
                if(col === 0 || col === row){
                    this.rows[row][col] = 1;
                } else{
                    
                    this.rows[row][col] = this.undef(this.rows[row-1][col-1]) + this.undef(this.rows[row-1][col]); 
                }
                
            }
        } 
        
           
};


Triangle.prototype.undef = function(input){
    if(input == undefined){
        return 0;
    }
};


module.exports = Triangle; **/


var Triangle = function(nRows) {
	/* Builds Pascals Triangle */
	this.rows = [];
	var row = [1];
	for(var i = 0; i < nRows; i++ ) {
		this.rows.push(row);
		this.lastRow = row;
		row = next_row(row);
	}
}

function next_row(current_row) {
	/* Builds the next row of Pascals Triangle */
	var row = []; 
	var prev = 0;
	for(var j = 0; j < current_row.length; j++) {
		row.push(current_row[j] + prev);
		prev = current_row[j];
	}
	row.push(prev);
	return row;
}

module.exports = Triangle;