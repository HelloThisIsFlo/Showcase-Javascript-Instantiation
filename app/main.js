module.exports = function(host, port) {
    console.log('Constructing main Object!!');

    // Private functions
    const getUrl = function(host, port) {
        return ['ws://', host, ':', port, '/socket'].join('');
    };


    // Members
    const url = getUrl(host, port);



    return {

        mainFunction: function() {



            console.log('In the main function');
            console.log(url);
        },

        otherFunction: function() {
            console.log('In the other function');
        }

    };
};
