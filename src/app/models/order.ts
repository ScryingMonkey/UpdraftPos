import { Item } from './item';
import { TimeStamp } from './timestamp';

export class Order {
    public employeeKey: string;
    public customerId: number;
    public utcTimeStamp: string;
    public total: number; // total order cost
    public items:Array<Item>;
    
    constructor() {
        let o = {
            employeeKey:"None",
            customerId: "0000000000",
            utcTimeStamp: new TimeStamp().utc,
            total: 0.00,
            items: []
        };
        this.updateValues(o);
    }
    updateValues(update:Object) {
        for (let k in update){
            if(update.hasOwnProperty(k)){
                this[k] = update[k];
            }
        }
    }
    get json() { return JSON.stringify(this); }
}
