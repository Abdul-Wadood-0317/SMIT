//Arrays

const myArray = [0,1,2,3,4,5]
console.log(myArray[2]);

const myArr = new Array(0,1,2,3,4,5)
// console.log(myArr[0]);

// myArr.push(5)
// myArr.pop(6)
// console.log(myArr);

// myArr.unshift(121)
// myArr.shift()
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log( typeof myArr);
// console.log(typeof newArr);

// console.log(myArr);


//slice, splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);