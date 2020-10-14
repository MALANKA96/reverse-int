module.exports = function reverse (n) {
    let a = 0;
    if (n < 0) { a = Math.abs(n); 
  return  Number(a.toString().split("").reverse().reduce((x,y) => x+y));}
  return  Number(n.toString().split("").reverse().reduce((x,y) => x+y));
}
