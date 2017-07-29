// ExampleWF -- Example "With Factory"
//
// Example class having 2 fields to showcase how to define a class that will
// be instantiated using a `Factory`.
//
// Showcases constructor arguments, public methods, private methods.

module.exports = function(host, port, username) {
    // console.log('Constructing ExampleWF');

    // Private functions
    const makeUrl = function(host, port) {
        return ['ws://', host, ':', port, '/socket'].join('');
    };


    // Private Members
    const _url = makeUrl(host, port);
    const _username = username;


    // This is where the `new` operator is "hidden"
    // --> Calling `a = {}` is actualy INSTANTIATING a new `Object Literal`
    //
    // There are still some differences (try to log both created Examples).
    return {
        logUrlAndUsername: function() {
            console.log('Url: ' + _url + ' | Username: ' + _username);
        },

        getUrl: function() {
            return _url;
        },

        getUsername: function() {
            return _username;
        }
    };
};
