// Create a class.... instanciate class ...store in an array... all using input from users


//Functions
function calculateAge(birthdateString){
    let today = new Date();
    let birthdate = new Date(birthdateString);
    
    return today.getFullYear() - birthdate.getFullYear();


}


//Classes
class User {

    constructor(name, dni, phone, birthdateString){
        this.name = name;
        //birthdate...
        //Calculates age using an external fn that takes birthdate as input.
        this.birthdate = new Date(birthdateString);
        this.age = calculateAge(birthdateString);
        this.dni = dni;
        this.phone = phone;
        
    }

    getInfos(){
      return  `User : ${this.name}.\nDNI: ${this.dni}.\nAge : ${this.age}\nPhone: ${this.phone}.\nBirthDate : ${this.birthdate}`;
    }


}




//Playground...

let users = []; //Array to store users
let addMoreUser;


do{

    let name = prompt("Enter user name :");
    let dni = prompt("Enter user DNI :");
    let phone = prompt("Enter user phone :");
    let birthdateString = prompt("Enter user birthdate (mm/dd/yyyy) :");

    let tempUser = new User(name, dni, phone, birthdateString);

    console.log(tempUser.getInfos());
    

    users.push(tempUser);
    

    addMoreUser = parseInt(prompt("Do you want to add more user(s)? \n1 - Yes \n2 - No."));

}
while(addMoreUser === 1)


console.log(users);