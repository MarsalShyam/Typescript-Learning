// Function in Typescript

// 1. basic function
function makeChai(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type}`)
}
makeChai("Masala",2)

// 2. return function
function getChaiPrice():number{  //return type number -> fixed
    return 23;
}

function makeOrder(order:string):string|null{
    if(!order) return null;
    return order;
}

//Logger- use while need to return nothing
function logChai():void{
    console.log("Chai is ready")
}

//Optional/Default paramerter -> writing these in end of the program for the better practicing

// function orderChai(type?:string){  //Optional type

// }
function orderChai(type:string="Masala"){  //default type
    
}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4;
}