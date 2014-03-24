/* jshint ignore:start */

module("Validation");

test("Match", function() {
  NEUE.Validation.Functions.match("dog", "cat", function(result) {
    ok(result.success == false, "should reject if different strings");
  });

  NEUE.Validation.Functions.match("dog", "Dog", function(result) {
    ok(result.success == false, "should reject if different capitalization");
  });

  NEUE.Validation.Functions.match("dog", "dog ", function(result) {
    ok(result.success == false, "should reject if different spacing");
  });

  NEUE.Validation.Functions.match("super$ecure19", "super$ecure19", function(result) {
    ok(result.success == true, "should accept if the same");
  });
});

