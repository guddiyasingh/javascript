console.log('This is promises');


// let prom1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("Yes I am done")
//         resolve("Harry")
//     }, 3000);
// })

// prom1.then((a)=>{
//     console.log(a)
// })


let prom1 = new Promise((resolve, reject) =>{

let a = Math.random();
if(a < 0.5){
    reject("No random number was not supporting you")
}
else{

    setTimeout(() =>{
                console.log("Yes I am done")
                resolve("Harry")
            }, 3000);
}

})

prom1.then((a) =>{
    console.log(a)
}).catch((err) =>{
   console.log(err) 
})