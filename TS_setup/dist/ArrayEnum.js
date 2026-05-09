"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array In TS
const chaiFlavours = ["masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.2, 5.2]; // little defficult to understand
const menu = [
    { name: "Cold Coffee", price: 15 },
    { name: "Black Coffee", price: 24 }
];
// menu.push() -> this things need to understand that  what are the others methods are available for manuplating the data in the typescript with example
//Read Only Array-> Array that can be defind but not modify
const cities = ["patna", "salem"];
// cities.push("Gaya")-> these not allowed because on readonly
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
//tuples in TS
let coffeeTuple;
coffeeTuple = ["Masala", 20];
// coffeeTuple=[20,"Masala"] -> not allowed, tuples restriction. Format should follow as the parent structure
let userInfo;
userInfo = ["hitesh", 100];
userInfo = ["shyam", 200, true];
//some tuples are readonly
const location = [28.66, 32.22];
//named tuple
const chaiItems = ["Masala", 25];
//ENUM in TS
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; //102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")
//NOT standard practice
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
let t = ["chai", 10];
t.push("extra"); //unexpected behavior
//# sourceMappingURL=ArrayEnum.js.map