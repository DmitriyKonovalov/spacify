const string = String;
string.prototype.spacify = function newSpacify() {
    return this.split('').join(' ');
};
