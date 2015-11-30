exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return parseInt(num,bit)
  },

  base10: function(str) {

  },

  convertToBinary: function(num) {
    return num.toString(2)
  },

  multiply: function(a, b) {
    var ans= a*b;
    //TODO: fix the amount of places
    return ans;
  }
};
