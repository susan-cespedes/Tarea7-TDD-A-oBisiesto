function bisiesto(year) {

  if(year%400===0){
    return true
    }
    
  if(year%100===0){
      return false
    }
}

export default bisiesto;
