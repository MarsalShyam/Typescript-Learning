//Object creation in the typescript
const chai={
    name:"Masala chai",
    price:20,
    isHot:true
}

// {
//     name:string;
//     price:number;
//     isHOT:boolan
// }

let tea:{
    name:string;
    price:number;
    isHot:boolean;
}

tea={
    name:"Ginger Tea",
    price:23,
    isHot:true
}

//Types  Alias
type Tea={
    name:string;
    price:number;
    ingradients:string[]
}

const adrakChai:Tea={
    name:"Adrak Chai",
    price:43,
    ingradients:["ginger", "tea leaves"]
}

// duck typing vs structual typing
type Cup={size:string}
let smallCup:Cup={size:"200ml"}

let bigCup={
    size:"500ml", 
    material:"steel"
}

smallCup=bigCup;

//One more example-> it's dificul to understand (doubt)
type Brew={brewTime:number}
const coffee={brewTime:5, beans:"Arabica"}
const chaiBrew:Brew=coffee //Here Coffee Contains->brewTime:number , so Extra property is "beans" does not matter(ignored).

//nested objec type
type User={
    username:string;
    password:string
}
const u:User={
    username:"Ganesh",
    password:"233"
}

type Item={name:string, quantity:number}
type Address={street:string, pin:number}

type Order={
    id:string;
    items:Item[];
    address:Address;
}


//partial method, partial value pass
type Chai={
    name:string;
    price:number;
    isHot:boolean
}

const updateChai=(updates:Partial<Chai>)=>{  //it makes all the properties optional
    console.log("updating chai with",updates);
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({}) //Empty also possible

//Required Method

type ChaiOrder={
    name?:string;
    quantity?:number
}
const placeOrder=(order:Required<ChaiOrder>)=>{ //it makes all the properties required
    console.log(order);
}

placeOrder({
    name:"ginger chai",
    quantity:2
})

//Pick method
type Coffee={
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[]
}
type BasicCoffeeInfo=Pick<Coffee,"isHot"|"name">;
//it maked picked option required
const coffeeInfo:BasicCoffeeInfo={
    name:"Cold Coffee",
    isHot:false
}

//omit method
type NewCoffee={
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[]
}

type PublicCoffee=Omit<NewCoffee,"secretIngredients">;