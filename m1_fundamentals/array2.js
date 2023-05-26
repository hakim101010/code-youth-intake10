const data=[2,5,8,12,34]
data[0] //2
data[1] //5
data[3] //12
data[4] , data[data.length-1]
data.length //size of array-5

data[2]=80
data[5]=22;

console.log(data);

let newData=[];
//accessing each element of array-traversing any array
for(let i=0;i<data.length;i++){
    newData[i]=data[i]+2;
    console.log("new",newData[i]); //data[0] data[1]
    console.log("old",data[i]); 
}

//let a=15
//let b;
let a=15;
let b=a*2;
let c;
c=a+b;

//let data1=[12,34,56,2];
//let data2=[2,4,6,7];
//let data3=[];
//for(let i=0;i<data1.length;i++){
    //data3[i]=data1[i]+data2[i];
    //data3
    //data3[1]=data1[1]+data2[1];
//}
//console.log(data3);


//let a=4,b=5;
//let c=a+b;

//const data1=[];
//const data2=[];

//let Data=[red,blue,green,black,orange]

//array methods
// push() - an array function to insert to insert elements at the end of an array


console.log("original array",data);
data.push(23);
console.log("push-array",data);
data.push(34,45);
console.log("push-array",data);


//pop()- to delete element from end of an array 
//data.pop();
//console.log("pop-array",data);
//console.log("deleted elements",ele);

//shift()- removes first element of array
let firstele=data.shift();
console.log("shift-array",data);
console.log("deleted element",firstele);

//slice()- to take part of an array
//slice(start_index,end_index-1)

let sliceArray=data.slice(1,4);
console.log("original array",data);
console.log("sliced array",sliceArray);

//splice - to add, remove, replace array elements
//splice(start_index,count_of_delete,add_elem1,add_elem2...)

//using splice for removing

let spliceArr=data.splice(2,3);
console.log("original array",data);
console.log("spliced array",spliceArr);

//using splice to insert

spliceArr=data.splice(3,0,11,22,44);
console.log("original array",data);
console.log("spliced array",spliceArr);

//using splice to replace

spliceArr=data.splice(2,1,222);
console.log("original array",data);
console.log("spliced array",spliceArr);

//sort
const stringArray=['white','blue','green','grey','purple'];
console.log(stringArray.sort())
const data1 = [2,5,7,22,67];
console.log("sorting",data.sort())

function arrSort(a,b){
    return b-a;
}

//reverse
//for(i=data.legth-1;i>=0;i--){
//    console.log(data1[i])
//}

console.log("reversing", data1.reverse());

//join
let joinArr=stringArray.join(' ')
console.log("join-",joinArr);
let splitArr=joinArr.split(' ');
console.log("split-", splitArr)


const data2 = [2,15,77,22,67];
let mapArray=data2.map((item)=>item+5);
console.log("mapped",mapArray);
let filteredArray=data2.filter((element)=>element<25);
console.log("filtered",filteredArray);

let reduced=data2.reduce((sum,current)=>sum*current);
console.log("reduce",reduced);

console.log("array type",typeof data2);