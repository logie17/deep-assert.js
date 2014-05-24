require('../lib/deep-assert.js');

exports["basic default usage"] = function(test){

  test.expect(1);
  var got = {
    foo: {
      bar: 'deep'
    }
  }
  test.deep_cmp(got, JSON.parse(JSON.stringify(got)), "two data structures match");
  test.done();
};

