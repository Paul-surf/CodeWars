function solve(arr){
    let result = arr.sort((a, b) => b - a);
    let a = result[0];
    let b = result[1];
    let c = result[2];
    if (a > (b+c)) {
      return b+c;
    } else {
      return Math.floor((a+b+c) / 2);
    }
}