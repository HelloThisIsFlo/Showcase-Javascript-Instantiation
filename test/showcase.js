//Test dependencies
var expect = require('chai').expect;
var should = require('chai').should();

// Application dependencies
var exampleWFFactory = require('../app/example_wf.js');
var ExampleWN        = require('../app/example_wn.js');


describe('Showcase the 2 diferent "Clean" ways to instantiate an Object', function () {

    const host = 'localhost';
    const port = 4000;
    const username = 'Florent';


    it('Example with Factory', function () {
        // This is how you create an instance
        const exampleWithFactory = exampleWFFactory(host, port, username);

        // State is as expected
        const urlFromObj = exampleWithFactory.getUrl();
        const usernameFromObj = exampleWithFactory.getUsername();

        expect(urlFromObj).to.equal('ws://localhost:4000/socket');
        expect(usernameFromObj).to.equal('Florent');

        // Members are PRIVATE
        const urlFromObjField = exampleWithFactory._url;
        should.not.exist(urlFromObjField);

        // exampleWithFactory.logUrlAndUsername();
    });

    it('Example with New', function () {
        // This is how you create an instance
        const exempleWithNew = new ExampleWN(host, port, username);

        // State is as expected
        const urlFromObj = exempleWithNew.getUrl();
        const usernameFromObj = exempleWithNew.getUsername();

        expect(urlFromObj).to.equal('ws://localhost:4000/socket');
        expect(usernameFromObj).to.equal('Florent');

        // Members are NOT PRIVATE
        const urlFromObjField = exempleWithNew._url;
        expect(urlFromObjField).to.equal('ws://localhost:4000/socket');


        // exampleWithFactory.logUrlAndUsername();
    });

});
