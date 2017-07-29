// ExampleWN -- Example "With New"
//
// Example class having 2 fields to showcase how to define a class that will
// be instantiated using the `new` keywords.
//
// Showcases constructor arguments, public methods, private methods.

const ExampleWN = function(host, port, username) {
    // Private functions
    const makeUrl = function(host, port) {
        return ['ws://', host, ':', port, '/socket'].join('');
    }

    // Public Members
    this.username = username;

    // Private Member
    const _url = makeUrl(host, port);
    const _privateUsername = 'Private_' + username;

    //Public Function using Private Members
    this.getPrivateUsername = function() {
        return _privateUsername;
    }
    this.getUrl = function() {
        return _url;
    }

};

// Public Functions in the Prototype
ExampleWN.prototype.getUsername = function() {
    return this._username;
}


module.exports = ExampleWN;
