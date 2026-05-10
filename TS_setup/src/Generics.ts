//Generics in TS

// IT makes the code more reusable
function wrapInArray<T>(item:T):T[]{
    return [item]  //returning array of item
}
// if we pass string then it gives string
// if we pass number then it gives number, etc

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor:"Ginger"})

// some more example->Generic Types
function pair<A,B>(a:A,b:B):[A,B]{
    // return [a,b]
    return [a,b]
}

pair("masala", 20)
pair("masala",{flavor:"Ginger"})

//Generic Interfaces
interface Box<T>{
    content:T
}
const numberBox:Box<number>={content:10}
const numberBoxCup:Box<string>={content:"10"}

//Generic used in  class, utility, readonly properties, also support partial, peak, required, omit

// -------Real World Uses--------
// API responses
// forms state in react

interface ApiPromise<T>{
    status:number,
    data:T
}
const res:ApiPromise<{flavor:string}>={
    status:200,
    data:{flavor:"masala"}
}

