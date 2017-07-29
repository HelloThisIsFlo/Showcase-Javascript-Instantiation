// ExampleWN -- Example "With New"
//
// Example class having 2 fields to showcase how to define a class that will
// be instanciated using the `new` keywords.
//
// Showcases constructor arguments, public methods, private methods.

const ExampleWN = function(host, port, username) {
    // Private functions
    const makeUrl = function(host, port) {
        return ['ws://', host, ':', port, '/socket'].join('');
    }

    // Public Members (no public members possible?)
    this._url = makeUrl(host, port);
    this._username = username;

};

ExampleWN.prototype.getUrl = function() {
    return this._url;
}
ExampleWN.prototype.getUsername = function() {
    return this._username;
}


module.exports = ExampleWN;
