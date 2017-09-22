var Triangle = function(input){
    var n = input;
    this.rows = [];
    this.lastRow = [];
 /**   if(n == 1){
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

     for(var i=0;i<n;i++){
          if(n == 1){
                    this.rows[i] = [1];
                    break;
                } else if (n == 2){
                    this.rows[i] = [1];
                    this.rows[i++] = [ 1 , 1 ];
                    break;
                } else {
                    this.rows[i] = [1];
                    this.rows[i++] = [ 1 , 1 ];
                    i = i+2;
                    for(var j=1;j<=i+1;j++){
                    
                            this.rows[i][j-1] = this.undef(this.rows[i-1][j-1]) + this.undef(this.rows[i-1][j-2]);
                        }
                
            }
        }

        

           
};


Triangle.prototype.undef = function(input){
    if(input == undefined){
        return 0;
    }
};


module.exports = Triangle;