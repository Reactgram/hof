

// let arr = [10,20,30,40,50]



// let x = arr.reduce((sum,value,index)=> {return sum+value})

// console.log(x) // 150


// loop 1: => 10
// sum = 0, value = 10 =>  sum+value => 0+10 => 10 , sum = 10
// loop 2: 20
// sum = 10, value = 20 => sum+value => 10+20 => 30, sum = 30
// loop 3: 30
// sum = 30, value = 30 => sum+value => 30+30 => 60, sum = 60



// sum = sum+value

// sum = 0
// for(let t of arr){
//     sum = sum+t
// }


// let arr = [10,[20,30], 40, [50,60,70], 80]

// let x = arr.reduce((flatArray, value,index)=>{
//     // flatArray = [10,20,30,40,50,60,70]
//     // console.log(flatArray)
//       if(typeof(value) == "number"){
//          return [...flatArray, value]
        
//       }
//       else if(typeof(value) == "object"){
//         // console.log("value",value) // [20,30]
//                return  [...flatArray, ...value]
            
//       }
// }, [])

// console.log(x)





// let newArr = [10,20]
// for(let t of arr){
//     //   console.log(t, typeof t)
//     // newArr.push(t)
    
//     if(typeof(t) == "number"){
//           newArr.push(t)
//     }

//     else if(typeof(t) == "object"){ // [20,30]
//           for(let x of t){
//             newArr.push(x)
//           }
//     }

// }
// console.log(newArr)



// console.log(arr[1][1])

// console.log(arr[3][2])

// let x = arr.flat()

// console.log(x) 

// reduce




// q2: 

let users = [
    {id: 1, name: "John", age: 25, city: "Delhi"},
    {id: 2, name: "Mike", age: 22, city: "Mumbai"},
    {id: 3, name: "Sam", age: 21, city: "Delhi"},
    {id: 4, name: "Dean", age: 22, city: "Mumbai"},
    {id: 5, name: "Cas", age: 25, city: "Delhi"},
    {id: 6, name: "Charlie", age: 21, city: "Chennai"},
]

// group people by their cities:


// let obj = {
//     "Delhi": [{id: 1, name: "John", age: 25, city: "Delhi"}, 
//               {id: 3, name: "Sam", age: 21, city: "Delhi"}, 
//                {id: 5, name: "Cas", age: 25, city: "Delhi"}],
//     "Mumbai": [{id: 2, name: "Mike", age: 22, city: "Mumbai"},
//                 {id: 4, name: "Dean", age: 22, city: "Mumbai"}],
//     "Chennai": [{id: 6, name: "Charlie", age: 21, city: "Chennai"}]
// }



// q3: 

// let arr = [10,20,10,20,30,10,20,30,40,10]

// {
//   10: 4,
//     20: 3,
//     30: 2,
//     40: 1

// }