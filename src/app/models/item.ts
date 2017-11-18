export class Item {
    public eanucc13: number;
    public upca: number;    
    public displayName: string;
    public cost: number;
    public price: number;
    public quantity: number; // quantity of this item in the order
    public description: string;
    public sizeweight: string;
    public issuingCountry: string;
    public lastModified: string;
    
    constructor() {
        let r = Math.floor(Math.random()*(30.00-0.25)+0.25);
        let i = {
            upca: "000000000000",
            eanucc13: Math.round(Math.random()*9999999999999),
            displayName: "New Item",
            cost: +(r).toFixed(2),
            price: +(r*1.4).toFixed(2),
            description: "New Item Description.",
            sizeweight: Math.round(Math.floor(Math.random()*(30.00-0.25+1)+0.25)).toFixed(1) +" oz",
            issuingCountry: "NA",
            lastModified: "NA"
        };
        this.updateValues(i);
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
