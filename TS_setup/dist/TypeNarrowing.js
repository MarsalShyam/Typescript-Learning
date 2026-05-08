"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
//Exostic Check
function orderChai(size) {
    if (size === 'small') {
        return `small cutting chai..`;
    }
    if (size === 'medium') {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
//Safety Check
class mangojuice {
    serve() {
        return `serve the passanger to reach thier destination`;
    }
}
class applejuice {
    serve() {
        return `serve only for the owner`;
    }
}
function serve(juice) {
    if (juice instanceof mangojuice) {
        return juice.serve();
    }
    // return juice.serve();
}
// Suppose data comes from:
// API
// user input
// database
// localStorage
// TypeScript cannot trust it.
// ---------TYPE GUARD
// in the first obj it don't know if it is really juiceorder
function isJuiceOrder(obj) {
    //     If this function returns true,
    // then TypeScript should treat obj as JuiceOrder.
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    // This checks if object is truly a valid JuiceOrder.
    );
}
function serveOrder(item) {
    if (isJuiceOrder(item)) {
        return `Serving ${item.type} juice with ${item.sugar} sugar`;
    }
    return `Serving custom juice: ${item}`;
}
// Notice all types contain: type: "something"->type:"masala"
// This special property helps TypeScript identify the exact object type.
// This is called: Discriminator Property->type
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala Chai";
            break;
        case "elaichi":
            return "Elaichi Chai";
            break;
        case "ginger":
            return "Ginger Chai";
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
// function isStringArray(arr: unknown): arr is string[]{
// }
//# sourceMappingURL=TypeNarrowing.js.map