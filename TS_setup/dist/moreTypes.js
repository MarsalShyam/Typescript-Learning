"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
//Forcefull type assertion (as)
let numericLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
//Other HTML Element Assertion
// HTMLInputElement
// HTMLButtonElement
// HTMLImageElement
// HTMLFormElement
// HTMLAnchorElement
// HTMLVideoElement
// HTMLAudioElement
// HTMLSelectElement
// HTMLTextAreaElement
// HTMLDivElement
let value;
value = "chai";
value = [1, 2, 3, 4];
value = 2.5;
value.toUpperCase();
let newValue; //call, constructor and access property
newValue = "Chai";
newValue = [2, 3, 4, 2];
newValue = 2.5;
// newValue.toUpperCase() ///not possible
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
//TRY Catch block
// Try Catch in TypeScript
// Used for handling runtime errors safely.
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "Ram and Shyam";
// const strData:string=data;  //not possible, need to forcefully assertion
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}
// function neverReturn():never{
//     while(true){}
// }
//# sourceMappingURL=moreTypes.js.map