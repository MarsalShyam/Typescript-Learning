"use strict";
//OOP in TS
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    price;
    // constructor(flavour:string, price:number){
    //     this.flavour=flavour
    //     this.price=price
    // }
    constructor(flavour, price) {
        this.flavour = flavour;
        console.log(this);
        this.price = price;
    }
}
const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour="masala"
//Access modifier in TS ->recommended to mention the access modifier
class Coffee {
    flavor = "Cold";
    secretIngredients = "Ice";
    reveal() {
        return this.secretIngredients; //ok
    }
}
class Shop {
    shopName = "Corner Shop";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //ok
    }
}
// new Branch().getName -> give the access of getName access
class Walet {
    #balance = 100; //it auto make private(as JS)
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
// const c=new Coffee()
//Read Only Capability
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
//Control get-> Getter/Setter
class ModernChai {
    _sugar = 2; //usually we use _ for the private variable
    //we used getter/setter, when we have to access the private variable
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
//use
const c = new ModernChai();
c.sugar = 3;
//Static Members-> shared according to all objects
class EkChai {
    flavour;
    static shopName = "Chaicode Caffee";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
//Access on class, not on object
console.log(EkChai.shopName);
//Some time we need to make the class, but we don't want to make the objects using these class, specially->in mobile dev, shift
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}
//Composition
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    //Heater is the type and by composition we access the other class function
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=oop.js.map