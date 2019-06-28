var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Basic Http Request', function () {
    it('should return 200', function(done) {
        chai.request('https://www.google.com')
        .get('/')
        .end(function(error, response) {
            chai.expect(response).to.have.status(200);
            done();
        });
    });
});
