//Test dependencies
var expect = require('chai').expect;

// Application dependencies
var mainFactory = require('../app/main.js')


describe.skip('Cli Client', function () {

    var main;
    const host = 'localhost';
    const port = 4000;


    beforeEach(function() {

        main = mainFactory(host, port);

    });


    it('Runs the main function', function () {

        console.log('hello');
        main.mainFunction();

    });

    it('Runs another test :D', function() {
        main.otherFunction();
    });

});
