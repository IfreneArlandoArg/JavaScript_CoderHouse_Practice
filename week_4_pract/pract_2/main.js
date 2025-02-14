// Create a class.... instanciate class ...store in an array... all using input from users


//Functions


//Classes
class User {

    constructor(name, dni, phone){
        this.name = name;
        //birthdate...
        //Calculates age using an external fn that takes birthdate as input.
        this.dni = dni;
        this.phone = phone;
    }

    getInfos(){
      return  `User : ${this.name}.\n DNI: ${this.dni}.\n Phone: ${this.phone}.`;
    }


}



//Playground...

let users = []; //Array to store users
let addMoreUser;


do{

    let name = prompt("Enter user name :");
    let dni = prompt("Enter user DNI :");
    let phone = prompt("Enter user phone :");

    let tempUser = new User(name, dni, phone);

    console.log(tempUser.getInfos());

    users.push(tempUser);
    

    addMoreUser = parseInt(prompt("Do you want to add more user(s)? \n 1 - Yes \n2 - No."));

}
while(addMoreUser === 1)


console.log(users);