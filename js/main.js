$(document).ready(function () {
    fieldSet
        .forEach(
            c => {
                const inputEl = document.getElementById(c.name);

                if(c.type === types.SELECT){
                    inputEl.onchange = () =>
                        handleValidate(c.name, c.validFunction, document.getElementById(c.name).value);
                }

                inputEl.onkeyup = () =>
                    handleValidate(c.name, c.validFunction, document.getElementById(c.name).value);
            });

    document.getElementById("contact-form").onsubmit = handleSubmit;

});

const form = document.getElementById("contact-form")
const modal = document.getElementById("modal");
const btn = document.getElementById("myBtn");

const types= {
    INPUT: 'input',
    SELECT:'select'
}

const fieldSet = [
    {
        name:"first-name",
        id:0,
        errorMessage:"first name can not be blank",
        type: types.INPUT,
        validFunction: validateName
    },
    {
        name: "last-name",
        id:1,
        errorMessage:"last name can not be blank",
        type: types.INPUT,
        validFunction: validateName
    },
    {
        name: "email",
        id: 2,
        errorMessage:"email can not be blank",
        type: types.INPUT,
        validFunction: validateEmail
    },
    {
        name: "phone-number",
        id:3,
        errorMessage:"phone number can not be blank",
        type: types.INPUT,
        validFunction: validatePhoneNumber
    },
    {
        name: "destination",
        id: 4,
        errorMessage:"destination can not be blank",
        type: types.SELECT,
        validFunction: validateName
    }
]



function validateName(value){
    return value.trim() === "" ? "This field can not be empty" : null
}

function validateEmail(value){
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return pattern.test(value) ? null : "Invalid email"
}

function validateSelect(value){
    return value === " " ? "This field can not be empty" : null
}

function validatePhoneNumber(value){
    const trimmedValue = value.replace(/\s/g, "");
    const pattern = /\+48[1-9][0-9]{8}$/
    return trimmedValue === "" ? "This field can not be empty" : pattern.test(trimmedValue) ? null : "Invalid phone number"
}


function handleValidate(fieldName, validFunction, value){
    const result = validFunction(value);
    const parentClassName = fieldName + '-row';
    const parentEl = document.getElementsByClassName(parentClassName)[0];
    const inputEl = document.getElementById(fieldName);
    const errorMessage = parentEl.getElementsByClassName('error')[0];
    const successIcon = parentEl.getElementsByClassName("success-icon")[0];
    const errorIcon = parentEl.getElementsByClassName("error-icon")[0];

    if (result) {
        errorMessage.innerHTML = result
        inputEl.style.border = "2px solid red";
        errorIcon.style.opacity = "1";
        successIcon.style.opacity = "0";
    } else {
        errorMessage.innerHTML = '&nbsp';
        inputEl.style.border = "2px solid green";
        errorIcon.style.opacity = "0";
        successIcon.style.opacity = "1";
    }

    return result;
}


function handleSubmit(event) {
        event.preventDefault();

        const resultSet = fieldSet
            .map(
                c => {
                    return handleValidate(c.name, c.validFunction, document.getElementById(c.name).value)
                });

        const result = resultSet.every(e => !e);

        if (result) {
            const submitBtn = document.getElementById("submit-btn");
            modal.style.display = "block";
            submitBtn.disabled = true
            submitBtn.classList.add("disabled");
            setTimeout(function () {
                modal.style.opacity = '0';
                modal.style.transitionProperty = 'opacity';
                modal.style.transitionDuration = '2s';
            }, 3000);

        }

    return false;
}

