export class Item {
    public eanucc13: number;
    public upca: number;    
    public displayName: string;
    public cost: number;
    public price: number;
    public description: string;
    public sizeweight: string;
    public issuingCountry: string;
    public lastModified: string;
    
    constructor() {
        let cost = Math.floor(Math.random()*(30.00-0.25+1)+0.25);
        let i = {
            upca: "000000000000",
            eanucc13: "0000000000000",
            displayName: "New Item",
            cost: cost,
            price: cost*1.4 ,
            description: "New Item Description.",
            sizeweight: (Math.floor(Math.random()*(30.00-0.25+1)+0.25)).toString() +" oz",
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
