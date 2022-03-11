// Kata 6 Create Phone Number
function createPhoneNumber(numbers){
    let first3 = "(" + numbers.slice(0, 3).join("") + ")";
    let number = numbers.slice(3, 6).join("") + "-" + numbers.slice(6,10).join("");
    return first3 + " " + number;
  }