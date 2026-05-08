function getChai(kind:string | number){
    if(typeof kind==="string"){
        return `Making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}

function serveChai(msg?:string){  //msg can or it can not
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

//Exostic Check
function orderChai(size:"small"|"medium"|"large"|"number"){
    if(size==='small'){
        return `small cutting chai..`;
    }
    if(size==='medium'){
        return `make extra chai`;
    }
    return `chai order #${size}`;
}

//Safety Check
class mangojuice{
    serve(){
        return `serve the passanger to reach thier destination`;
    }
}
class applejuice{
    serve(){
        return  `serve only for the owner`;
    }
}

function serve(juice:mangojuice|applejuice){
    if(juice instanceof mangojuice){
        return juice.serve();
    }
    // return juice.serve();
}

//special power
// can create own type---------TYPE GUARD
type JuiceOrder={
    type:string
    sugar:number
}

// Suppose data comes from:

// API
// user input
// database
// localStorage

// TypeScript cannot trust it.

// ---------TYPE GUARD
// in the first obj it don't know if it is really juiceorder
function isJuiceOrder(obj:any):obj is JuiceOrder{
//     If this function returns true,
// then TypeScript should treat obj as JuiceOrder.
    return(
        typeof obj==="object" &&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
        // This checks if object is truly a valid JuiceOrder.
    )
}

function serveOrder(item:JuiceOrder | string){
    if(isJuiceOrder(item)){
        return `Serving ${item.type} juice with ${item.sugar} sugar`
    }
    return `Serving custom juice: ${item}`
}

type MasalaChai={type:"masala"; spicelevel:number};
type GingerChai={type:"ginger"; amount:number};
type ElaichiChai={type:"elaichi"; anoma:number};

type Chai=MasalaChai | GingerChai | ElaichiChai; //union type

// Notice all types contain: type: "something"->type:"masala"
// This special property helps TypeScript identify the exact object type.
// This is called: Discriminator Property->type

function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
            return "Masala Chai"
            break;
        case "elaichi":
            return "Elaichi Chai"
            break;
        case "ginger":
            return "Ginger Chai"
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

// function isStringArray(arr: unknown): arr is string[]{

// }