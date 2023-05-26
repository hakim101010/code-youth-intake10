//const user=['Bob',20,50,'Canada'];
//let username='bob',age=20,maths=50,address='canada';

//syntax of an object declaration
//const objectname={
//    key1:Value1,
//    key2:value2
//}

//const user={name:'Bob',age:20,marks:50,address:'canada'};
//console.log(user);
//accessing object values using dot notation
//console.log("address",user.address);
//accessing object values using square bracket notation
//console.log("address",user["address"]);
//const book={};
//book.title='Pride and Prejudice';
//book.author='XYZ';
//book.year=2000;
//console.log(book);

//console.log("keys",Object.keys(user));
//console.log("keys",Object.values(user));




const user={
    firstName:'Hakim',
    lastName:'Taha',
    address:{
        city:'Ottawa',
        country:'Canada',
        pcode:'L6K 4O0'
}
};
console.log("My First name is",user.firstName);
console.log("My last name is",user.lastName);
console.log("I reside in",user['address']);

//delete a property
delete user.age;
console.log("after deletion",user);

console.log("keys",Object.keys(user));
console.log("values",Object.values(user));

for(let key in user){
    console.log(user[key]);
}

const students=[
{
    name:'Hakim',
    city:'Ottawa'
}
];
for(let i=0;i<students.length;i++){
    console.log(students[i].name,students[i].city);
}