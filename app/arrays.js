exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i< arr.length; i++){
      if(arr[i]===item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var summer = 0;
    for(var i = 0; i<arr.length;i++){
      summer+=arr[i]
    }
    return summer;
  },

  remove : function(arr, item) {
    for(var i = 0; i< arr.length; i++){
      if(arr[i]===item){
        arr.splice(i, 1)
      }
    }
    return arr;

  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i< arr.length; i++){
      if(arr[i]===item){
        arr.splice(i, 1)
      }
    }
    return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i]=== item){
        counter++
      }
    }
    return counter

  },

  duplicates : function(arr) {
    var storage = {};
    for(var i = 0; i< arr.length; i++){
      var key = arr[i];
      if(storage[key]===undefined){
        storage[key]= []
      }
      storage[key].push(key);
    }
    var dups = []
    for(var k in storage){
      if(storage[k].length >1){
        dups.push(+k)
      }
    }
    return dups;
  },

  square : function(arr) {
    var newArray = []
    for(var i = 0; i< arr.length; i++){
      var sq = (arr[i])* (arr[i])
      newArray.push(sq)
    }
    return newArray;
  },

  findAllOccurrences : function(arr, target) {
    var occ= '';
    for(var i = 0; i< arr.length; i++){
      if(arr[i]===target){
        occ+= i;
      }
    }
    return occ;
  }
};
