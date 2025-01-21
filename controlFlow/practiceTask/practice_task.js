let userType= "employee";
let userProgram;
switch (userType) {
    case "employee":
        userProgram = "Dietary Services";
        break;
    case "enrolled member":
        userProgram = "Dietary Services & one-on-one interaction with a dietician";
        break;
    case "subscriber":
        userProgram = "Partial access to Dietary Services";
        break;
    default:
        userProgram = "Please enroll or subscribe to this facility";
}
console.log("Available Program:", userProgram);