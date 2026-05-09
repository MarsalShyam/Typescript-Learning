type ChaiOrder={
    type:string; 
    sugar:number; 
    strong:boolean;
}

function makeChai(order:{type:string; sugar:number; strong:boolean;}){
    console.log(order);
}

// function serveChai(order:type:string; sugar:number; strong:boolean;){
//     console.log(order);
// }

function serveChai(order:ChaiOrder){
    console.log(order);
}

type TeaRecipe={
    water:number;
    milk:number
}

//  interface TeaRecipe{
//     water:number;
//     milk:number
// }

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
}

// type CupSize="small" |"large"

// A class can only implement an object type or intersection of object types with statically known members.

// class Chai implements CupSize{

// }

interface CupSize{
    size:"small"|"large"
}

class Chai implements CupSize{
    size:"small"|"large"="large"
}

// type Response={ok:true}|{ok:false}
// class myRes implements Response{
//     ok:boolean=true;
// }

//Literal type
type TeaType="masala" | "ginger" | "lemon"
function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai={teaLeaves:number}
type Extra={masala:number}

type fullyChai=BaseChai & Extra;

const cup:fullyChai={
    teaLeaves:2,
    masala:1
}

type user={
    username:string;
    bio?:string
}

const u1:user={username:"shyam"}
const u2:user={username:"SHyam", bio:"shyam good boy"}

//Read only
type Config={
    readonly appName:string
    version:number
}
const cfg:Config={
    appName:"shyamPro",
    version:1.4
}

// cfg.appName="ram"      //Not possible. appName is oly readonly