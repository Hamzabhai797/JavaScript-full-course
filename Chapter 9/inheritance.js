// class parent {
//     hello() {
//         console.log("hi hamza")
//     }
// }

const { use } = require("react");

// class child extends parent {
    
// }
// let obj = new child();

// class person {
//     eat(){
//         console.log("eating");
//     }
//     sleep(){
//         console.log("sleeping");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("working");
//     }
// }
// let hamzaobj = new engineer();


let data = "secret data";
class user{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    viewData(){
        console.log("website data", data);
    }
}

class Admin extends user{
    constructor(name, email){
        super(name, email); // Call the parent class constructor
    }
    editData(){
        data = "admin data";
    }
}
let admin = new Admin("name", "admin@gmail.com")
let std1 = new user("Hamza", "hamza@gmail.com")
let std2 = new user("Osama", "osama@gmail.com")
