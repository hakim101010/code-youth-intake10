//let marks=[20,45,60,75,80,90,100];
//console.log("elements",marks.length);
//console.log("array size",marks);
//console.log("element 1",marks[0]);
//console.log("element 5",marks[4]);
//console.log("last element",marks[marks.length-1])
//marks[1]=100;
//console.log("array",marks);

//access every element of array
//for(i=0;i<marks.length-1;i++){
//    marks[i]=marks[i]+2;
//    console.log(marks[i]);
//}

//for(i=0;i<marks.length-1;i++){
//    marks[i]=marks[i]*2;
//    console.log(marks[i]);
//}

//read n number of values in an array and display it in reverse order.
//Find square of every array element
//to print all negative elements in an array.

let numbersArray = [98,144,364,387,-31,409,195,300,48,28,169,-11,-6,183,87,383,405,31,185,39];

//1 
console.log("fifth element",numbersArray[4]);

//2
console.log("elements",numbersArray);

//3
console.log("even numbers")
for(let i=0;i<numbersArray.length;i++){
    console.log("loop")
    console.log(numbersArray[0]);
    console.log(numbersArray[1]);
    console.log(numbersArray[2]);
    console.log(numbersArray[7]);
    console.log(numbersArray[8]);
    console.log(numbersArray[9]);
}

//4

numbersArray.length
let sum=0
for(let i=0;i<numbersArray.length;i++){
    sum+=numbersArray[i]
}
console.log(sum/numbersArray.length)

//5
let start=5
for(let i=start;i>=0;i--){
    console.log(numbersArray[i])
}
//numbersArray.reverse()
//console.log("reversed array",numbersArray);

//6
console.log("squared arrays")
for(i=0;i<numbersArray.length;i++){
    console.log(numbersArray[i]*numbersArray[i]);
}

//7


//Use the numbersArray for the next questions

// 1. console.log the fifth element in the array. -31

// 2. console.log every element in the array

// 3. run through the array with a for loop and console.log every number that is even

// 4. find the average of every number in the array

// 5. read n number of values in an array and display it in reverse order.

// 6. Find square of every array element

// 7. print all negative elements in an array