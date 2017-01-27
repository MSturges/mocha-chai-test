module.exports = {
  // helloWorld: function () {
  //   return 'Hello, World!';
  // }

  calcTax : function(input) {

    if (input <= 10) {
      return (input * .10);
    }
    if (input > 10) {
      return ((input - 10) * .07 ) + 1
    }
  }
}
