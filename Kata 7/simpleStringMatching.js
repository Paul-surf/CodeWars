function solve(a,b){
    if (a.indexOf('*')==-1 && a!=b) {
      return false; 
    }
    
    let arr = a.split('*');
    
    if (arr.length==1) {
      arr.push('');
    }
    if (arr[0].length+arr[1].length>b.length) {  
      return false;
    }
    
    let s='';
    
    for (var i=0; i<arr[0].length; ++i) {
      s+=b[i];
    }
    
    if (a.indexOf('*')!=-1) {  
    s+='*';
    }
    
    for (var j=b.length-arr[1].length; j<b.length; ++j) {
      s+=b[j];
    }
    if (s!=a) {
      return false;
    }
    return  true;
}