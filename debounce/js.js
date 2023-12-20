// // // const xhr = new XMLHttpRequest();
// // // const requestUrl = 'https://api.github.com/users/himanshuisherenow'

// // // xhr.open('GET',requestUrl)
// // // xhr.onreadystatechange = function(){
// // //     console.log(xhr.readyState)
// // //     if(xhr.readyState === 4){
// // //         const data = JSON.parse(this.responseText)
// // //         console.log(data)
// // //         console.log(data.followers)

// // //     }
// // // }
// // // xhr.send()

// // // object literal 

// // // class User {
// // //     constructor(name , age){
// // //         this.name = name
// // //         this.age = age 
// // //     }

// // //      name1() {
        
// // //         console.log("virat is in name ")
// // //     }
// // //     static age (){
// // //         console.log("i am static age ")
// // //     }
// // // }


// // // const h = new User("virat",35)
// // // h.name1()


// // // let name1 = {
// // //     "firstname" : "Himanshu",
// // //     "lastname": "Chavda",
// // //     "printName" : function (){
// // //         console.log(this.firstname +"  " +this.lastname)
// // //     }
// // // }

// // let m = function  (what,city){
// //     console.log(`${this.firstname} has a lastname ${this.lastname} ${what} ${city}` )
// // }



// // // name1.printName(name2)
// // // let x =name1.printName.call(name2)
// // // m.call(name2,"virat")

// // // let c = m.bind(name1,"Boss")
// // // c()

// // let name2 = {
// //     "firstname" : "someone",
// //     "lastname": "none",
// // }
// // let hey = m.bind(name2,"what!")
// // hey()


// // Function.prototype.myBind = function(...args){

// //     let obj = this,
// //     params = args.slice(1)
// //     return function(...args2){
// //         obj.apply(args[0],[...params,...args2])
// //     }

// // }

// // let hey22 = m.myBind(name2,"what!")
// // hey22("always")


// let a = function(x,y){
//     console.log(this)
//     console.log(x*y)
// }

// let d = a.bind(this,2,8)

// d(10)// ignore 10 here because of 8

// let multiply = function (x) {
//     return function (y) {
//     console. log(x * y);
    
//     Let multiplyByTwo = multiply(2);
//     multiplyByTwo(3);









