//Array In TS
const chaiFlavours:string[]=["masala", "Adrak"];
const chaiPrice:number[]=[10,20]

const rating:Array<number>=[4.2,5.2] // little defficult to understand

//Array Object
type Coffee={
    name:string;
    price:number
}
const menu:Coffee[]=[
    {name:"Cold Coffee", price:15},
    {name:"Black Coffee", price:24}
]
// menu.push() -> this things need to understand that  what are the others methods are available for manuplating the data in the typescript with example

//Read Only Array-> Array that can be defind but not modify
const cities:readonly string[]=["patna","salem"]
// cities.push("Gaya")-> these not allowed because on readonly

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

//tuples in TS
let coffeeTuple:[string, number];
coffeeTuple=["Masala",20]
// coffeeTuple=[20,"Masala"] -> not allowed, tuples restriction. Format should follow as the parent structure

let userInfo:[string, number, boolean?]
userInfo=["hitesh",100]
userInfo=["shyam",200,true]

//some tuples are readonly
const location:readonly [number, number]=[28.66, 32.22]

//named tuple
const chaiItems: [name: string, price:number]=["Masala",25]

//ENUM in TS
enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const size=CupSize.LARGE

enum Status{
    PENDING=100,
    SERVED, //101
    CANCELLED  //102
}
enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}
function makeChai(type:ChaiType){
    console.log(`Making: ${type}`)
}
makeChai(ChaiType.GINGER)
// makeChai("masala")

//NOT standard practice
enum RandomEnum{
    ID=1,
    NAME="chai"
}

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let t:[string, number]=["chai",10]
t.push("extra") //unexpected behavior