export class AuthState {
    public displayName: string;
    public email: string;
    public emailVerified: boolean;
    public photoURL: string;
    public uid: boolean;
    
    
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