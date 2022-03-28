'use strict'

var express = require('../')

describe('app', function(){
    it('should inherit from event emitter', function(done){
        var app = express()
        app.on('foo', done)
        app.emit('foo')
    })

    describe('#listen()', function(){
        it('should wrap with a localhost', function(done){
          var app = express();
      
          var server = app.listen(3000, function(){
            server.close();
            done();
          });
        })      
    })
    /*
    describe('#get()', function(){
        it('should return a resource or throw a 404 error', function(done){
            var app = express()

            try{
                app.get
            }
            catch(err){
                done()
            }
        })
    })*/
})