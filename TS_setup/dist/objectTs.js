"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object creation in the typescript
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};
// {
//     name:string;
//     price:number;
//     isHOT:boolan
// }
let tea;
tea = {
    name: "Ginger Tea",
    price: 23,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 43,
    ingradients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = {
    size: "500ml",
    material: "steel"
};
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee; //Here Coffee Contains->brewTime:number , so Extra property is "beans" does not matter(ignored).
const u = {
    username: "Ganesh",
    password: "233"
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); //Empty also possible
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "ginger chai",
    quantity: 2
});
//it maked picked option required
const coffeeInfo = {
    name: "Cold Coffee",
    isHot: false
};
//# sourceMappingURL=objectTs.js.map