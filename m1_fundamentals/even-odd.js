function check(num){
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

check(45);
check(12);

using return
function checkEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

let number=check(23);
console.log(number);

