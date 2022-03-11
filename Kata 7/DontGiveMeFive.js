// Kata 7 - Don't give me five!
function dontGiveMeFive(start, end) {
    let result = 0;
      
    for (let i = start; i < end+1; i++) {
      if ((i + "").includes(5) == false) {
        result++;
      }
    }
    return result
  }