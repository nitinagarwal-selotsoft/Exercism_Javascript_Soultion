//WIP
var SpaceAge = function(age){
    this.seconds = age;

};
SpaceAge.prototype.onEarth = function(){
  var ageOnEarth =  (this.seconds/31557600).toFixed(2);
  return parseFloat(ageOnEarth);
};
SpaceAge.prototype.onMercury = function(){
    var inSeconds = 0.2408467*365.25*24*60*60;
return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onVenus = function(){
    var inSeconds = 0.61519726*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onMars = function(){
    var inSeconds = 1.8808158*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onJupiter = function(){
    var inSeconds = 11.862615*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onSaturn = function(){
    var inSeconds = 29.447498*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onUranus = function(){
    var inSeconds = 84.016846*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};
SpaceAge.prototype.onNeptune = function(){
    var inSeconds = 164.79132*365.25*24*60*60;
    return parseFloat((this.seconds/inSeconds).toFixed(2));
};







module.exports = SpaceAge;