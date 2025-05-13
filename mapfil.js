/* map() => Creates anew array by performing some operation an each array element.

const a =[1,2,3,4]

a.map ((value, index, array) =>{
    return value*value});

*/


 
    
    let arr = [1,13,24,3,6]
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArr.push(element**2)
    }
    console.log(newArr)
     