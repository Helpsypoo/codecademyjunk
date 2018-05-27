var Tests = {};

Tests.runAllTests = function() {
  var errors = [];
  Tests.testReturnsTrue(errors);
  Tests.testReturnsHello(errors);
  Tests.testReturnsTheMeaningOfLife(errors);
  Tests.logErrors(errors);
};

Tests.testReturnsTrue = function(errors) {
  if (Main.returnsTrue() !== true) {
    errors.push('returnsTrue: returnsTrue function should return true.');
  }
};

Tests.testReturnsHello = function(errors) {
  if (Main.returnsHello() !== 'Hello') {
    errors.push("returnsHello: returnsHello function should return 'Hello'.");
  }
};

Tests.testReturnsTheMeaningOfLife = function(errors) {
  if (Main.returnsTheMeaningOfLife(42) !== 'The meaning of life is clear') {
    errors.push("returnsTheMeaningOfLife: returnsTheMeaningOfLife function should return 'The meaning of life is clear' when number is 42.");
  }
  if (Main.returnsTheMeaningOfLife(41) !== 'The meaning of life is unclear') {
    errors.push("returnsTheMeaningOfLife: returnsTheMeaningOfLife function should return 'The meaning of life is unclear' when number is not 42.");
  }
};

Tests.logErrors = function(errors) {
  if (errors.length === 0) {
    console.log('%cAll tests passed!', 'color: #30AD35');
  } else {
    errors = new Set(errors);
    var errorMessage = ' errors found:';
    if (errors.size === 1) {
      errorMessage = ' error found:';
    }
    console.log('%c' + errors.size + ' ' + errorMessage, 'color: #BA1222');
    errors.forEach(function(error) {
      console.log('%c  ' + error, 'color: #BA1222');
    });
  }
};
