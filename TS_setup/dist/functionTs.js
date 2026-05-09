"use strict";
// Function in Typescript
Object.defineProperty(exports, "__esModule", { value: true });
// 1. basic function
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 2);
// 2. return function
function getChaiPrice() {
    return 23;
}
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
//Logger- use while need to return nothing
function logChai() {
    console.log("Chai is ready");
}
//Optional/Default paramerter -> writing these in end of the program for the better practicing
// function orderChai(type?:string){  //Optional type
// }
function orderChai(type = "Masala") {
}
function createChai(order) {
    return 4;
}
//# sourceMappingURL=functionTs.js.map