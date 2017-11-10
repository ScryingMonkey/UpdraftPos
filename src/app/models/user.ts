export class User {
    public key: string;
    public displayName: string;
    public email: string;
    public userType: string; // member or coach
    public testFromModel: string;
    public photoURL: string;
    // public stats:Array<any>;
    // public permissions = [];
    
    constructor() {
        this.testFromModel = "TEST!";
        // this.displayName = "Test User";
        // this.email = "test@test.com";
        // this.userType = "testUser";
        // this.createKey();
        let u = {
            displayName:"New User",
            email: "new@new.com",
            userType: "newUser",
            photoURL: "no.url"
        };
        this.updateValues(u);
    }
    testUser():User {       
        let nuser = new User();
        let u = {
            displayName:"Test User",
            email: "test@test.com",
            userType: "testUser",
            photoURL: "test.url"            
        };
        nuser.updateValues(u);
        return nuser; 
    }
    updateValues(update:Object) {
        for (let k in update){
            if(update.hasOwnProperty(k)){
                this[k] = update[k];
            }
        }
        this.key = this.createKey(this.email);           
    }
    createKey(email){ 
        return email.replace('@','AT').replace('.','DOT'); 
    }
    
    get json() { return JSON.stringify(this); }
}
