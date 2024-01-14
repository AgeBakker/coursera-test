function makeMultiplier(multiplier) {
    var myFunFunc = function (x) {
      return multiplier * x;
    };
    
    return myFunFunc;
  }
  
  var operation = makeMultiplier(8);
  console.log(operation(9));