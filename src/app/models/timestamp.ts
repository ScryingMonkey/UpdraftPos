export class TimeStamp {
    public local: string;
    public utc: string;
    private monList: Array<string>;

    constructor() {
        this.monList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];        
        let t = {
            local: this.dateStamp,
            utc: this.UTCDatestamp
        };
        this.updateValues(t);
    }
    
    updateValues(update:Object) {
        for (let k in update){
            if(update.hasOwnProperty(k)){
                this[k] = update[k];
            }
        }
    }
    get dateStamp():string {       
        let today = new Date();
        let sec = today.getSeconds();
        let min = today.getMinutes();
        let hr = today.getHours();
        let day = today.getDate();
        let mon = this.monList[today.getMonth()] //pulls string from list by index
        let yr = today.getFullYear();

        return (hr+':'+min+':'+sec+'_'+mon+day+yr) 
    }
    get UTCDatestamp():string {       
        let today = new Date();
        let sec = today.getUTCSeconds();
        let min = today.getUTCMinutes();
        let hr = today.getUTCHours();
        let day = today.getUTCDate();
        let mon = this.monList[today.getMonth()] //pulls string from list by index
        let yr = today.getUTCFullYear();

        return (hr+':'+min+':'+sec+'_'+mon+day+yr) 
    }
    get json() { return JSON.stringify(this); }
}
