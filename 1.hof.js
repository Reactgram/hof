// hof => higher order functions 


// function hello(fun1){
//    fun1()

//    return ()=>{}
// }



// hof: 
// 1: It can accept a function as an argument // callback
// 2: It can return a function  // 
// 3: or both



// function hello(){
//     console.log("A")
//     return function(){
//         console.log("B")
//     }
// }


// let x = hello() // A
// // x = ()=>{console.log("B")}
// x() // B



// function hello(){
//     console.log("A")
//     return ()=>{
//         console.log("B")
//         return ()=>{
//             console.log("C")
//         }
//     }
// }

// let x = hello()

// let y = x() 

// y()



// function greet(){
//     console.log("Good Monring")
// }


// function hello(){

//     return greet
// }