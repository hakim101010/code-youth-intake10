
const temp = -5;

if (temp <=0) {
    console.log("freezing weather")
}
else if(temp >= 0 && temp <= 10){
    console.log("Very Cold")
}
else if(temp >= 10 && temp <= 20){
    console.log("cold weather")
}
else if(temp >= 20 && temp <=30){
    console.log("hot")
}
else if(temp >= 40){
    console.log("very hot")
}
else{
    console.log("wrong")
}