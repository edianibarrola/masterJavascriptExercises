// Write your function here
function isEitherEven(a,b){
    if (a %2 == 0 || b%2 ==0){
        return true;
    }else return false;
}
var output = isEitherEven(1,4);
console.log(output);