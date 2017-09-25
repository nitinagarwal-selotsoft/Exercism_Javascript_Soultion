var Robot = function() {
    this.name = generateNewName();
};

Robot.prototype.reset = function() {
    this.name = generateNewName();
};

const usedNames = {};

const generateNewName = function() {
    do {
        var newName =   Math.random().toString(36).replace(/^0\./,'').replace(/[^a-z]/gi, '').toUpperCase().substring(0,2) + 
                        Math.random().toString(10).replace(/^0\./,'').replace(/[^0-9]/g, '').substring(0,3);
    } while (usedNames[newName]);
    usedNames[newName] = true;
    return newName;
};

module.exports = Robot;