//Interface in TS

interface Chai{
    flavor:string;
    price:number;
    milk?:boolean;
}

const masala:Chai={
    flavor:"masala",
    price:30
}

interface Shop{
    readonly id:number
    name:string
}

const s:Shop={id:1, name:"ChaiCode caffe"}
// s.id=2; it's not possible becuase it's readonly variable

// Interface make the structure of object not add the data inside
interface DiscountCalculator{
    (price:number):number
}
const apply50:DiscountCalculator=(p)=>p*0.5

interface TeaMachine{
    start():void;
    stop():void
}

const machine:TeaMachine={  //Here imp to implement all the property of TeaMachine 
    start(){
        console.log("start")
    },
    stop(){
        console.log("Stop")
    }
}

//Index signature in TS
interface ChaiRating{
    [flavor:string]:number
}

const ratings:ChaiRating={
    masala:4.5,
    ginger:4.5
}

// feature-> use multiple library from the system and from the outside and your own
//same name interface are menged, eventhough they come from different sources or it made by u in system
interface User{
    name:string
}
interface User{
    age:number
}
const u:User={  //interfaces object need to satisfied all the interfaces
    name:"Shyam",
    age:45
}

//extends the interface
interface A {a:string}
interface B {b:string}

interface C extends A,B {}

