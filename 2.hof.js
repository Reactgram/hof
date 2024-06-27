// inbuilt: 
// map, forEach, filter, reduce, find, sort()

// work only on arrays

// let arr = [10,20,30,40]


// Map:

// let arr = [10,20,30,40,50]

// let newArr = []
// for(let t of arr){
//     newArr.push(t*t)
// }
// console.log(newArr)

// let x = arr.map((value, index)=>{ return (value*value)})
// console.log(x) // [100,400,900,1600,2500]

// function map(square){
//      sqaure(value, index)
// }

// function square(value, index){
//     console.log(value*value)
// }




// let arr = [10,21,30,43,50]

// let x = arr.map((value, index)=> value%2==0)
// console.log(x)  // [true, false, true, false, true]

// let arr = [10,21,30,43,50]

// let x = arr.map((value, index)=> {
//     if(value%2==0){
//         return "even"
//     }
// })
// console.log(x)  



// forEach

// let arr = [10,20,30,40,50]

// arr.forEach((value,index)=> console.log(value*value))


// filter:

// let arr = [10,21,30,43,50]

// let x = arr.filter((value,index)=> value%2==0)

// console.log(x) // [10,30,50]

// let x = arr.filter((value,index)=> value>0)

// console.log(x)