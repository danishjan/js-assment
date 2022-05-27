// generators 

// generator function return us an iterator which can be stop in the middle of funaction and than resume it when ever  generator function can be stopped any number of time (by using yeild ) and resume later(by call .next).



// simple example and syntext

// function* simpleGenerator() {
//   console.log("first yeild")
//   yield 1
//   console.log("second yeild")
//   yield 2
//   console.log("third  yeild")
//   yield 3
//   console.log("fourth  yeild")
//   yield 4
// }

// const generatorObject = simpleGenerator()
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())


// // we can use multipal generators

// const generatorObject = simpleGenerator()
// const generatorObject2 = simpleGenerator()


// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject2.next())
// console.log(generatorObject2.next())


// use case


// use on unstopeables loops for limitng their itration  

// function* generatorId(){
//   let id = 1


//   while (true){
//     yield id
//     id++
//   }
// }
// const generatorObject = generatorId()
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())


// use with array 

// generator with array on loop o get value of each element on each next

// function* generator(arry){
//   for (let i = 0; i < Array.length; i++){
//     yield arry[i]
//   }
// }


// const generatorObject = generator([34, 6, 88, 77,])
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())



// another example

// function* generatorId(){
//     let id = 1
  
  
//     while (true){
//       const increment = yield id

//       if (increment != null){
//         id += increment
//       }
//       else {
//         id++
//       }
//     }
//   }
//   const generatorObject = generatorId()
//   console.log(generatorObject.next())
//   console.log(generatorObject.next(3))
//   console.log(generatorObject.throw(new Error("check your ussr name and password ")))
//   console.log(generatorObject.next())
  

