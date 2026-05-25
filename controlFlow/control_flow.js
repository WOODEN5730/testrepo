//import { dietaryEligibility } from "./dietaryEligibility.js";
let userRole = "admin";
let accessLevel = "" ;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

   if(isLoggedIn) {
       if (userRole === "admin") {
          accessLevel = "Full access granted";
          userMessage = "Welcome, Admin!" 
       } else 
         accessLevel = "Limited access granted"
         userMessage = "Welcome, User!"
   } else {
    accessLevel = "No access granted";
    userMessage = "Please log in to access the system.";
}  
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);

function dietaryEligibility(userRole) {
    let accessLevel = "";
    let userMessage = "";

    switch (userRole) {
        case "Employee":
            accessLevel = "Eligible for Dietary Services";
            userMessage = "Employee is eligible for full Dietary Services.";
            break;

        case "Enrolled Member":
            accessLevel = "Eligible for Dietary Services + Dietician Interaction";
            userMessage = "Enrolled Member is eligible for Dietary Services and one-on-one dietician support.";
            break;

        case "Subscriber":
            accessLevel = "Eligible for Partial Dietary Services";
            userMessage = "Subscriber is authorized for partial access to Dietary Services.";
            break;

        case "Non-Subscriber":
            accessLevel = "Not Eligible";
            userMessage = "Must enroll or subscribe first to access Dietary Services.";
            break;

        default:
            accessLevel = "Unknown";
            userMessage = "Unknown user role.";
    }

    console.log("Access Level:", accessLevel);
    console.log("User Message:", userMessage);

   // return { accessLevel, userMessage };
}
dietaryEligibility("Employee")
