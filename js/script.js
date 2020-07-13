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

const selectPayment = document.querySelector('#payment')
const creditCardSection = document.querySelector('#credit-card');
const payPalSection = document.querySelector('.paypal')
const bitcoinSection = document.querySelector('.bitcoin')

const selectMethod = selectPayment.firstElementChild
const creditCardOption = selectMethod.nextElementSibling
const payPalOption = creditCardOption.nextElementSibling
const bitcoinOption = payPalOption.nextElementSibling






creditCardOption.selected = true;

payPalSection.hidden = true;
bitcoinSection.hidden = true;

selectMethod.hidden = true;


selectPayment.addEventListener('change', (e) => {
    const paymentMethod = e.target.value
    if (paymentMethod === 'credit card') {
        creditCardOption.selected = true
        creditCardSection.hidden = false
        payPalOption.hidden = true
        bitcoinSection.hidden = true
    }
    else if (paymentMethod === 'paypal') {
        payPalOption.selected = true;
        payPalSection.hidden = false;
        creditCardSection.hidden = true;
        bitcoinSection.hidden = true;

    } else if (paymentMethod === 'bitcoin') {
        bitcoinOption.selected = true;
        bitcoinSection.hidden = false;
        payPalSection.hidden = true;
        creditCardSection.hidden = true;

    }

})


//Form Validation and validation messagges

function showErrorMessage(element) {
    const errorMessageToShow = document.querySelector('#error-message-' + element.id)
    errorMessageToShow.textContent = 'Please type a valid ' + element.id
    errorMessageToShow.hidden = false;
    errorMessageToShow.style.color = 'red'
    element.style.borderColor = 'red'

}
function hideErrorMessage(element) {
    const errorToRemove = document.querySelector("#error-message-" + element.id)
    errorToRemove.hidden = true;
    element.style.borderColor = 'white';
}

function nameValidator() {
    const name = nameInput.value
    if (name.length > 0) {
        hideErrorMessage(nameInput);
        return true;
    } else {
        showErrorMessage(nameInput)
        return false;
    }

}

function emailValidator() {
    const email = emailInput.value
    const indexOfAt = email.indexOf('@')
    const lastIndexOfDot = email.lastIndexOf('.')
    if (indexOfAt > 1 && lastIndexOfDot > indexOfAt + 1) {
        hideErrorMessage(emailInput)
        return true;
    } else {
        showErrorMessage(emailInput)
        return false;

    }



}

function checkboxValidator() {
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].checked) {
            hideErrorMessage(registerForActivities)
            return true;
        }
    }
    showErrorMessage(registerForActivities)
    return false;

}

function creditCardValidator() {
    const creditCardNum = creditCardInput.value
    const cardNo = /^\d{13}$|^\d{14}|^\d{15}$|^\d{16}$/.test(creditCardNum);
    if (cardNo) {
        hideErrorMessage(creditCardInput)
        return true;
    } else {
        showErrorMessage(creditCardInput)
        return false;
    }
}

function zipValidator() {
    const zipNum = zipInput.value
    const isValidZip = /(^\d{5}$)/.test(zipNum)
    if (isValidZip) {
        hideErrorMessage(zipInput)
        return true;
    } else {
        showErrorMessage(zipInput)
        return false;
    }

}

function cvvValidator() {
    const cvv = cvvInput.value
    const isValidCvv = /(^\d{3}$)/.test(cvv);
    if (isValidCvv) {
        hideErrorMessage(cvvInput)
    } else {
        showErrorMessage(cvvInput)
    }

}

function validate() {
    isNameValid = nameValidator()
    isEmailValid = emailValidator()
    isCheckboxValid = checkboxValidator()
    const options = document.querySelectorAll('#payment option')
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected.value = 'credit card') {
            isCCValid = creditCardValidator()
            isZipValid = zipValidator()
            isCvvValid = cvvValidator()

        }

    }

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
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();

})