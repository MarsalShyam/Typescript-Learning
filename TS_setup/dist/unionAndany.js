"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union Example
let subs = '1m';
let apiRequestStatus = "Pending";
apiRequestStatus = "Successs"; //here only the typed things allowed to assign.
let airlineSeat = 'middle';
airlineSeat = 'aside';
//Avoid any
const orders = ["12", "20", "24", "28", "42"];
let currentOrder; //Here using undefined help to avoid the any
for (let order of orders) {
    if (order === "24") {
        currentOrder = "24";
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map