function rng(a, b) {
    if (a > b) {
      var c = a;
      a = b;
      b = c;
    }
  
    return Math.floor(Math.random() * (b - a + 1) + a);
}
  
function afrn(arr) {
    const num = rng(0, (arr.length - 1));
  
    return arr[num];
}
  
function arrayFromRNG(arr) {
    const num = rng(0, (arr.length - 1));
  
    return arr[num];
}
  
module.exports.afrn = afrn;
module.exports.arrayFromRNG = arrayFromRNG;