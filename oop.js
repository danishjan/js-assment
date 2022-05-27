// oops in javascript

// abstraction
// data hiding 


// real life example


// function Employee(name, age, baseSalary ){
//   this.name = name;
//   this.age = gae;
//   this.baseSalary = baseSalary;
//   this.monthlyBonus = 1000;

//   this.calculateFinalSalary = function(){
//     let calculateFinalSalary = this.baseSalary + this.monthlyBonus
//     console.log('name :' +this.name + '| age'+this.age)
//   }
// }

// let emp1 = new Employee('danish', 30,2000);
// emp1.getEmpDetails();
// emp1.calculateFinalSalary();




// function Employee(name, age, baseSalary){
//   this.name = name;
//   this.age = age;
//   this.baseSalary = baseSalary;

//   let monthlyBonus = 1500;

//   let calculateFinalSalary = function(){
//       let finalSalary = baseSalary + monthlyBonus;
//       console.log ('Final Salary is : '+finalSalary);
//   }

//   this.getEmpDetails = function (){
//       console.log ('Name : '+this.name+' | Age : '+this.age);
//       calculateFinalSalary();
//   }
// }

// let emp1 = new Employee('John', 30, 2000);
// emp1.getEmpDetails();


// inheritance


let arr = ["mubeen ", "danish"];
let object ={
  name :"ansar",
  city: "gilgit",
  getIntro : function(){
    console.log(this.name +"from " + this.city);
  }
}

function fun(){
     
}
// polymorphism

// encapsulation


// Array methods


// map

// applay fuction on each elemet of first existing  array and return new arry from the existing one
//  syntax
// var new_array = array.map(function callback(element, index, Array){
//   // return the value for new array 
// })


// simple example

// let array = [1, 2, 3, 4, 5, ]
// let some = array.map(num => num * 3);
// console.log(array)
// // returned  new array 
// console.log(some);



//  Array of object example

// const student = [
//   { name: "danish", age : 55, gender: "male"},
//   { name :"barch", age : 77, gender: "shemale"},
//   { name : "Ansar", age : 44},
//   { name : "sost", age : 17},
// ];


// const result = student.map(num =>({value: num.name, text: num.age, def:num.gender}));
// console.log(result);

// filter 
// apllied conditinol statment against each element in array 
// if the condtion is true it return the value and if it os false did,nt reurn value


// Syntax
// var new_array = arr.filter(function callback (element, index, array){
//   // than it return true or false 
// })

// simple example

// const number = [1, 2, 3, 4, 5,];
// const even = number.filter(num=> num%2===0)
// console.log(number)
// // filter
// console.log(even);

  
// arrays of object exmple


// const student = [
//     { name: "danish", age : 55, gender: "male"},
//     { name :"barch", age : 77, gender: "shemale"},
//     { name : "Ansar", age : 44, gender: "shemale"},
//     { name : "sost", age : 17, gender: "shemale"},
//   ];
  

//   const gojo = student.filter((a)=>{if(a.gender=='shemale'){return a}})
//   console.log(gojo);

//   let arr=[{id:1,title:'A', status:true}, {id:3,title:'B',status:true}, {id:2, title:'xys', status:true}];
// //find where title=B
// let x = arr.filter((a)=>{if(a.title=='B'){return a}});
// console.log(x)


// reduce


// reduce an arry value down to just one value. to get the value . it run reducer function on each element.

// simple example 

// const numer = [1,2,3,4]


// const simple = numer.reduce((sum,num) => sum+num)
// console.log(simple);
// // const even = numer.reduce(function (result , item) {
// //   return result + item
// // })

// console.log(even)

// let months = [ {id :1 },{id :2 },{id :3 },]
//  let monthsbyid = months.reduce((byId, month) => byId[month.id] = month ,{});

//  console.log(monthsbyid);


// sort 

// sorts the  element in an array and return the sorted array.

// syntax \

// Arr.sort([compareFunction])
// rearranging  the numbers 
// let numbers = [0, 1, 2, 40, 20, 34,];
// numbers.sort();
// console.log(numbers);


// example 
// let students = [
//   {firstName : "danish", lastName : "jhon", age : 66},
//   {firstName : "sost ", lastName : "janu", age : 88},
//   {firstName : "mubeen jan", lastName : "jander", age :99}
// ];
// // const ggg= students.sort((a,b)=>{return a.age - b.age})
// // console.log(ggg);

// students.forEach((e)=>{
//   console.log(`${e.firstName} ${e.lastName} ${e.age}`)
// })










