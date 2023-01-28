export const getInput =(id)=> document.getElementById(id);
const getClass = (className)=>{
    document.getElementsByClassName(className)
}

// get icons

const firstName = getInput("first-name");
const lastName = getInput("last-name");
const email = getInput("email");
const phoneNumber = getInput("phone-number");
const destination = getInput("destination");


const fields = [firstName, lastName, email, phoneNumber, destination];
const form = getInput("contact-form")
// const errorMessage = getClass("error");

const successIcon = getClass("success-icon");
const errorIcon = getClass("error-icon");
const errorMessage = document.getElementsByClassName('error');

console.log(lastName, "lastName");
console.log(errorMessage, "err message 0");



let engine = (id, serial, message) => {

    if (id.value.trim() === "") {

        errorMessage[serial].innerHTML = message;
        id.style.border = "2px solid red";
        console.log('empty')
        // icons
        // errorIcon.style.opacity = "1";
        // successIcon.style.opacity = "0";
    }

    else {
        errorMessage[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        console.log(errorIcon, "err icon")
        // errorIcon.style.opacity = "0";
        // successIcon.style.opacity = "1";
    }
}

 function handleValidate2(name, value, form){
    console.log(name);
    console.log(form, "form");
    switch(name){
        case 'first-name':
        case 'last-name':
            const errorMessage = document.getElementsByClassName('error');
            const fieldName = document.getElementById(name);
            console.log(name)
            if (value.trim() === "") {
                fieldName.nextElementSibling.innerHTML="message"

                fieldName.style.border = "2px solid red";

                // icons
                // errorIcon.style.opacity = "1";
                // successIcon.style.opacity = "0";
            }else{
                errorMessage[0].innerHTML="";
                fieldName.style.border = "2px solid green";
            }
            break;
        case'email':
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    engine(firstName, 0, "first name can not be blank");
    engine(lastName, 1, "last name can not be blank");
    engine(phoneNumber, 2, "phone number can not be blank");
    engine(email, 3, "email can not be blank");
    engine(destination, 4, "destination can not be blank");
});
