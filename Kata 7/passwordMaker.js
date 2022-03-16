function makePassword(phrase) {
    let arr = phrase.split(" ");
    var resultOfLoop = "";
    
    for (var i = 0; i < arr.length; i++) {
      var newPass = arr[i][0];
      resultOfLoop += newPass;
    }
    return resultOfLoop.replace(/[Oo]/g, 0).replace(/[iI]/g, 1).replace(/[sS]/g, 5);
}