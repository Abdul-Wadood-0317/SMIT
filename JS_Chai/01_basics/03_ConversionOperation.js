// ********************** Operations *********************

let value =3;
let negValue = -value
console.log(negValue);

// Stack(Primitive), Heap(Non Primitive)
let myYoutubeName = "abdulwadood.com"

let anotherName = myYoutubeName
anotherName = "chaiaurWadood"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    api:"user@hbl"
}

let userTwo = userOne

userTwo.email="wadood@microsoft.com"
console.log(userOne.email);
console.log(userTwo.email);
