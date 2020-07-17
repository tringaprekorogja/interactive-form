
/* Creates glogabal variables */
const form = document.querySelector("form");
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#mail')
const zipInput = document.querySelector('#zip')
const cvvInput = document.querySelector('#cvv')
const creditCardInput = document.querySelector('#cc-num')
const otherInput = document.querySelector('#other-title')
const selectRole = document.querySelector('select')
const selectColor = document.querySelector('#color')
const shirtColors = document.querySelectorAll('#color option')
const shirtDesign = document.querySelector('#design')
const registerForActivities = document.querySelector('.activities')
const activities = document.querySelectorAll('.activities input')






/* Sets focus by defult on the first field */
window.onload = (event) => {
    nameInput.focus();
};


/* Job role section*/

//Initially hides the other input field
otherInput.style.display = "none"

/*Adds an event listener to the select role*/
selectRole.addEventListener('change', (e) => {
    // checks the value of the selected option 
    if (e.target.value == 'other') {
        // displayes the other input field
        otherInput.style.display = "block";
    } else {
        // hiddes the other input field
        otherInput.style.display = "none";
    }
})

/*T-Shirt info section*/

/* Iterates through all the shirt color options */
for (let i = 0; i < shirtColors.length; i++) {
    // Initially hides all the shirt colors
    shirtColors[i].hidden = true;
}


/*Adds an event listener to the Design menu */
shirtDesign.addEventListener('change', (e) => {
    // Initially hides the select theme option
    shirtDesign.firstElementChild.hidden = true;
    // Sets theme to be the event target
    const theme = e.target.value;

    //Checks the value of theme
    if (theme == 'js puns') {
        //creates an empty array to store the shirt colors that include the theme
        let jsPunsColors = [];
        /*iterates through all the shirt color options */
        for (let i = 0; i < shirtColors.length; i++) {
            //Checks if the shirt color text includes the theme
            if (shirtColors[i].innerHTML.toLowerCase().includes(theme)) {
                //Adds the shirt color to the array
                jsPunsColors.push(shirtColors[i])
                //Sets the first color of the array to be selected
                jsPunsColors[0].selected = true;
                //Shows the color options
                shirtColors[i].hidden = false;

            } else {
                //Hides the color options
                shirtColors[i].hidden = true;
            }

        }
        //Checks the value of theme
    } else if (theme == 'heart js') {
        //creates an empty array to store the shirt colors that include the theme
        let iLoveJsColors = [];
        /*iterates through all the shirt color option */
        for (let i = 0; i < shirtColors.length; i++) {
            //Initially shows all the shirt color options
            shirtColors[i].hidden = false;
            // //Checks if the shirt color text includes 'js puns' or 'please'
            if (shirtColors[i].innerHTML.toLowerCase().includes('js puns') ||
                shirtColors[i].innerHTML.toLowerCase().includes('please')) {
                //hides the shirt colors 
                shirtColors[i].hidden = true;
            } else {
                //Adds the shirt color option to the array 
                iLoveJsColors.push(shirtColors[i])
                //Sets the first color in the array to be selected
                iLoveJsColors[0].selected = true;

            }

        }

    }
})

/*Register for activities section*/

//Creates an element to display total activity costs
const newParagraph = document.createElement('p');
registerForActivities.appendChild(newParagraph);

//Creates a variable to store the total activity cost and initially sets it to 0
let totalActivityCost = 0;

/* Adds an event listener to listen for changes in the activity section*/
registerForActivities.addEventListener('change', (e) => {
    // Creates a variable to reference the activity
    const activity = e.target
    // Creates a variable to store the data-cost value and turns it into a number.
    const activityDataCost = parseInt(activity.getAttribute('data-cost'))

    //Checks if the activity is checked or unchecked
    if (activity.checked) {
        //add the cost of the currently clicked activity to the total cost variable
        totalActivityCost += activityDataCost
    } else {
        // Substracts the cost
        totalActivityCost -= activityDataCost
    }
    // Sets the text of the total cost element
    const totalCostParagraph = document.querySelector('.activities p')
    totalCostParagraph.textContent = ` Total: $ ${totalActivityCost}`

    //Gets the `data-day-and-time` attribute value of the clicked element
    const activityDayAndTime = activity.getAttribute('data-day-and-time')

    // Iterates through all the activities
    for (let i = 0; i < activities.length; i++) {
        //Creates a variable that targets the activity input element at the current iteration
        let currentActivity = activities[i].getAttribute('data-day-and-time');
        //Checks if the  activity occurs at the same day and time as the activity that was just
        // clicked and is the activity different than the activity that was just clicked
        if (activityDayAndTime === currentActivity && activity !== activities[i]) {
            //Checks if the activity is checked
            if (activity.checked) {
                //Disables the activity
                activities[i].disabled = true;
            } else {
                //Enables the activity
                activities[i].disabled = false;
            }
        }

    }


})


/*Payment section*/

/*Creats global variables for the payment section*/

const selectPayment = document.querySelector('#payment')
const creditCardSection = document.querySelector('#credit-card');
const payPalSection = document.querySelector('.paypal')
const bitcoinSection = document.querySelector('.bitcoin')

const selectMethod = selectPayment.firstElementChild
const creditCardOption = selectMethod.nextElementSibling
const payPalOption = creditCardOption.nextElementSibling
const bitcoinOption = payPalOption.nextElementSibling





//Initially sets the credit card option to selected
creditCardOption.selected = true;

payPalSection.hidden = true;
bitcoinSection.hidden = true;

//Hides the 'Select Payment Method' option
selectMethod.hidden = true;

//Adds an event listener that listenes for changes in the select payment section
selectPayment.addEventListener('change', (e) => {
    //Sets the payment method to the method that was clicked
    const paymentMethod = e.target.value
    //Checks if the payment method is 'credit card'
    if (paymentMethod === 'credit card') {
        //set the credit card payment section to show, and the others two options to hide
        creditCardOption.selected = true
        creditCardSection.hidden = false
        payPalOption.hidden = true
        bitcoinSection.hidden = true
    }
    //Checks if the payment method is 'paypal'
    else if (paymentMethod === 'paypal') {
        //set the paypal payment section to show, and the others two options to hide
        payPalOption.selected = true;
        payPalSection.hidden = false;
        creditCardSection.hidden = true;
        bitcoinSection.hidden = true;
        //Checks if the payment method is 'bitcoin'
    } else if (paymentMethod === 'bitcoin') {
        //set the bitcoin payment section to show, and the others two options to hide
        bitcoinOption.selected = true;
        bitcoinSection.hidden = false;
        payPalSection.hidden = true;
        creditCardSection.hidden = true;

    }

})


/*Form Validation section*/

/*Creates a function to add a validaton error indicator when the user input is not valid*/
function showErrorMessage(element) {
    const errorMessageToShow = document.querySelector('#error-message-' + element.id)
    errorMessageToShow.textContent = 'Please type a valid ' + element.id
    errorMessageToShow.hidden = false;
    errorMessageToShow.style.color = 'red'
    element.style.borderColor = 'red'

}
//Creates a function to remove the validation error indicator
function hideErrorMessage(element) {
    const errorToRemove = document.querySelector("#error-message-" + element.id)
    errorToRemove.hidden = true;
    element.style.borderColor = 'white';
}

/*Creates a validation function for the name input field*/
function nameValidator() {
    //Creates a variable to store the user Input 
    const name = nameInput.value
    //Checks the user input
    if (name.length > 0) {
        //Calls the function to remove the validation error message indicator
        hideErrorMessage(nameInput);
        return true;
    } else {
        //Calls the function to add the validation error message indicator
        showErrorMessage(nameInput)
        return false;
    }

}
/*Creates a validation function for the email input field*/
function emailValidator() {
    //Creates a variable to store the user Input
    const email = emailInput.value
    //Creates a variable to store the indexOf of the `@` in the email value
    const indexOfAt = email.indexOf('@')
    //Creates a variable to store the lastIndexOf of the `.` in the email value
    const lastIndexOfDot = email.lastIndexOf('.')
    //Checks if the indexOfAt is greater than one AND the `.` last index is greater than the `@` index + 1, 
    if (indexOfAt > 1 && lastIndexOfDot > indexOfAt + 1) {
        //Calls the function to remove the validation error message indicator
        hideErrorMessage(emailInput)
        return true;
    } else {
        //Calls the function to add the validation error message indicator
        showErrorMessage(emailInput)
        return false;

    }



}
/*Creats a validation function for the activitie section*/
function checkboxValidator() {
    //Iterates through all the activities input elements
    for (let i = 0; i < activities.length; i++) {
        //Checks if the activity input at current iteration is checked
        if (activities[i].checked) {
            //Calls the function to remove the validation error message indicator
            hideErrorMessage(registerForActivities)
            return true;
        }
    }
    //Calls the function to add the validation error message indicator
    showErrorMessage(registerForActivities)
    return false;

}
/*Creats a validation function for the credit card number*/
function creditCardValidator() {
    //Creates a variable to store the credit card input
    const creditCardNum = creditCardInput.value
    //Creates a regular expression and tests the credit input
    const cardNo = /^\d{13,16}$/.test(creditCardNum);
    if (cardNo) {
        //Calls the function to remove the validation error message indicator
        hideErrorMessage(creditCardInput)
        return true;
    } else {
        //Calls the function to add the validation error message indicator
        showErrorMessage(creditCardInput)
        return false;
    }
}

/*Creates a validation function for the zip code*/
function zipValidator() {
    //Crates a varable to store the zip code input 
    const zipNum = zipInput.value
    //Creates a regular expression and tests the zip code input
    const isValidZip = /(^\d{5}$)/.test(zipNum)
    if (isValidZip) {
        //Calls the function to remove the validation error message indicator
        hideErrorMessage(zipInput)
        return true;
    } else {
        //Calls the function to add the validation error message indicator
        showErrorMessage(zipInput)
        return false;
    }

}
/*Creates a validation function for the cvv */
function cvvValidator() {
    //Creates a variable to store the cvv input
    const cvv = cvvInput.value
    //Creates a regular expession and tests the cvv input
    const isValidCvv = /(^\d{3}$)/.test(cvv);
    if (isValidCvv) {

        //Calls the function to remove the validation error message indicator
        hideErrorMessage(cvvInput)
        return true
    } else {

        //Calls the function to add the validation error message indicator
        showErrorMessage(cvvInput)
        return false
    }

}
/*Creates a function to see if credit card option is selected*/ 
function isCreditCardSelected() {
   if (creditCardOption.selected === true){
       return true
   }else{
       return false
   }
}
/*Creeates a singel validation function to test all */
function validate() {
    isNameValid = nameValidator()
    isEmailValid = emailValidator()
    isCheckboxValid = checkboxValidator()
    if (isCreditCardSelected()) {
        isCCValid = creditCardValidator()
        isZipValid = zipValidator()
        isCvvValid = cvvValidator()
    }
    //Checks if the credit card is selected
    if (isCreditCardSelected()) {
        //Checks all the valdiations 
        if (isNameValid &&
            isEmailValid &&
            isCheckboxValid &&
            isCCValid &&
            isZipValid &&
            isCvvValid
        ) {
            return true;
        } else {
            return false;
        }
    } else {
        //Checks if name, email and checkbox are valid
        if (isNameValid &&
            isEmailValid &&
            isCheckboxValid
        ) {
            return true;
        } else {
            return false;
        }

    }

}



/*Adds an evenet listener to the form to listen for submit*/
form.addEventListener('submit', (e) => {    

    if (!validate()) {
        //prevents the default behaviour of submit
        e.preventDefault();
        console.log('Form is not valid')
    } else if (validate()) {
        console.log('Form is valid')
    }

})