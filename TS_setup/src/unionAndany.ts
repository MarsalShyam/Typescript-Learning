//Union Example
let subs:number|string='1m';

let apiRequestStatus:'Pending'|'Successs'|'Error'="Pending";
apiRequestStatus="Successs" //here only the typed things allowed to assign.

let airlineSeat:'aside'|'Window'|'middle'='middle';
airlineSeat='aside';

//Avoid any
const orders=["12","20","24","28","42"];

let currentOrder:string|undefined;  //Here using undefined help to avoid the any

for(let order of orders){
    if(order==="24"){
        currentOrder="24";
        break;
    }
    currentOrder="11";
}
console.log(currentOrder);