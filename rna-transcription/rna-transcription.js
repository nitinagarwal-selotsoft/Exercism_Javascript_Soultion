var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna) {
var rna = dna.split("");
var pattern = new RegExp("[a-zB-BD-FH-SU-Z0-9!@#$%^&*]");
if(!dna.match(pattern)){
  for(i=0;i<rna.length;i++){
    if(rna[i] == 'C'){
        rna[i] = rna[i].replace('C','G');
        } else if (rna[i] == 'G'){
        rna[i] = rna[i].replace('G','C');
        } else if (rna[i] == 'A'){
        rna[i] =  rna[i].replace('A','U');
        } else if (rna[i] == 'T'){
        rna[i] = rna[i].replace('T','A');
        } else throw new Error ("Invalid input");
}
return rna.join("");
}else throw new Error ("Invalid input");
};

module.exports = DnaTranscriber;