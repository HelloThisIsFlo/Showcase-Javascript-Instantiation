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

        //////////////////////////
        // State is as expected //
        //////////////////////////

        // Private Members
        should.not.exist(exampleWithFactory._url);
        should.not.exist(exampleWithFactory._privateUsername);

        // Public Members
        expect(exampleWithFactory.username).to.equal('Florent');

        // Private Functions
        should.not.exist(exampleWithFactory.makeUrl);

        // Public Functions
        const urlFromObj = exampleWithFactory.getUrl();
        const usernameFromObj = exampleWithFactory.getPrivateUsername();
        expect(urlFromObj).to.equal('ws://localhost:4000/socket');
        expect(usernameFromObj).to.equal('Private_Florent');



        // exampleWithFactory.logUrlAndUsername();
    });

    it('Example with New', function () {
        // This is how you create an instance
        const exempleWithNew = new ExampleWN(host, port, username);

        //////////////////////////
        // State is as expected //
        //////////////////////////

        // Private Members
        should.not.exist(exempleWithNew._url);
        should.not.exist(exempleWithNew._privateUsername);

        // Public Members
        expect(exempleWithNew.username).to.equal('Florent');

        // Private Functions
        should.not.exist(exempleWithNew.makeUrl);

        // Public Functions
        const urlFromObj = exempleWithNew.getUrl();
        const usernameFromObj = exempleWithNew.getPrivateUsername();
        expect(urlFromObj).to.equal('ws://localhost:4000/socket');
        expect(usernameFromObj).to.equal('Private_Florent');


        // exampleWithFactory.logUrlAndUsername();
    });

});
