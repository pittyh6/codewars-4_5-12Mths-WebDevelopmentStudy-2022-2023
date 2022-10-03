/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
*/
function arrayDiff(a, b) {
    
    for(let i = 0; i < a.length; i++){
        if(b.length <=0){
            return a;
        }else{
            for(let j = 0; j< b.length; j++){
                if(a[i] == b[j]){
                    a.splice(i,1);
                    i -= 1;
                }else{
                    console.log("diferente: "+ a[i] + " b: " +b)
                }
            }
        }
    }
    console.log("final result: " + a)
    return a;
    

    /*
   console.log(a.filter(x=> !b.includes(x)))
   return a.filter(x=> !b.includes(x))
   */
}

arrayDiff([1,2], [1])//, [2], "a was [1,2], b was [1]"
arrayDiff([1,2,2], [1])//, [2,2], "a was [1,2,2], b was [1]");
arrayDiff([1,2,2], [2])//, [1], "a was [1,2,2], b was [2]");
arrayDiff([1,2,2], [])//, [1,2,2], "a was [1,2,2], b was []");
arrayDiff([], [1,2])//, [], "a was [], b was [1,2]");
arrayDiff([1,2,3], [1,2])//, [3], "a was [1,2,3], b was [1,2]")


//OTHERS RESULT
/*
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}
*/