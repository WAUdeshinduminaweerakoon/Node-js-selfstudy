// const user1={
//     id:1,
//     name:"Udesh",
//     password:"pass123",
//     login : function(){
//         console.log("Log...........");
//         console.log(this.name);
//     },
//     logout:()=>{
//         console.log("Logout");
//     }
// }
// // console.log(user1);  
// user1.login();
// user1.logout();

// class User{
//     constructor(){
//         this.id;
//         this.name;
//         this.password;
//     }
// }
// const user1 = new User();
// user1.name="udesh";
// user1.id=1;
// user1.password="Pass";
// console.log(user1);

// const user2 = new User();
// user2.name="Indumina";
// user2.id=2;
// user2.password="Pass123";
// console.log(user2);



// class User{
//     constructor(id,uname,password){
//         this.id = id;
//         this.name = uname;
//         this.password = password;
//     }
//     loign(){
//         console.log(this.name);
//     }
// }
// const user3 = new User(3,"weera","pass");
// console.log(user3);

class User{
    id;
    name;
    password;
    login=()=>{
        console.log(this.name);
    }
}

const user1 = new User();
user1.name = "udesh";
console.log(user1);