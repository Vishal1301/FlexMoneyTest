// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    fields: {
    },
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(){
      this.amOnPage('/simulation/tpsl/e2e-transaction.jsp');
    },
  });
}
