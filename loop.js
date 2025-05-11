let a =1;

for (let i=0; i< 100; i++) {

    console.log(a+i)
}


let obj = {

    name:"Guddiya",
    role: "programmer",
    company:"Google"
}

for (const key in obj){

    // const element = obj[key];
    const element =[key]

    console.log(element)
    console.log(obj)
}

for (const c of "Harry") {

    console.log(c)
}