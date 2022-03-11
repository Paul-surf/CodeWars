// Kata 8 Find The Smallest Integer In Array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowNum = Math.min(...args);
      return lowNum
    }
}

console.log(findSmallestInt([5,2,7,3,5,0]))