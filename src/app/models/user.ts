// import { UserAuth, UserProfile } from './index';

export class User {
    public key: string;
    public displayName: string;
    public email: string;
    public userType: string; // member or coach
    // public stats:Array<any>;
    // public permissions = [];
    
    constructor() {
        let u = {
            displayname:"New User",
            email: "new@new.com",
            userType: "newUser"
        };
        this.setValues(u);
    }
    testUser():User {       
        let nuser = new User();
        let u = {
            displayname:"Test User",
            email: "test@test.com",
            userType: "testUser"
        };
        nuser.setValues(u);
        return nuser; 
    }
    setValues(u:Object) {
        for (let k in u){
            if(u.hasOwnProperty(k)){
                this[k] = u[k];
            }
        }
        this.key = this.createKey();           
    }
    createKey(){ 
        return this.email.replace('@','AT').replace('.','DOT'); 
    }
}
