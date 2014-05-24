var console        = require('console');
var AssertionError = require('assert').AssertionError;
var assert         = require('nodeunit').assert;


var issues = [];
var deep_cmp = function(got, exp) {
  if (got && typeof(got) === 'object') {
    Object.keys(got).forEach(function(key){
      if ( exp[key] ) {
        deep_cmp(got[key], exp[key]);  
      } else {
        issues.push(key);
      }
    });
  }
  return issues;
};

assert.deep_cmp = function(got, exp, mess) {
  var issues = deep_cmp(got, exp);
  if ( issues.length === 0 ){
    console.log('✔ ' + mess);
    return; 
  } 
  assert.fail(issues[0], "structure", mess, 'is not in');
};

