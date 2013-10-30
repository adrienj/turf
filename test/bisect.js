var g = require('../index'),
  should = require('should')

describe('bisect', function(){
  it('should return the halfway point of a horizontal line starting off 0,0', function(done){
    var line = g.linestring([[0,0], [10,0]])
    var expectedMidPoint = g.point(5, 0)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
  it('should return the halfway point of a vertical line starting off 0,0', function(done){
    var line = g.linestring([[0,0], [0,10]])
    var expectedMidPoint = g.point(0, 5)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
  it('should return the halfway point of a vertical line starting off 1,1', function(done){
    var line = g.linestring([[1,1], [1,11]])
    var expectedMidPoint = g.point(1, 6)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
  it('should return the halfway point of a horizontal line starting off 1,1', function(done){
    var line = g.linestring([[1,1], [11,1]])
    var expectedMidPoint = g.point(6, 1)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
  it('should return the halfway point of a diagonal line starting off 0,0', function(done){
    var line = g.linestring([[0,0], [10,10]])
    var expectedMidPoint = g.point(5, 5)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
  it('should return the halfway point of a diagonal line starting off 1,1', function(done){
    var line = g.linestring([[1,1], [11,11]])
    var expectedMidPoint = g.point(6, 6)
    g.bisect(line, function(err, midpoint){
      if(err) throw err
      _.isEqual(midpoint, expectedMidPoint).should.be.true
      done()
    })
  })
}) 