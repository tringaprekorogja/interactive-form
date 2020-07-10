const nameInput = document.querySelector('#name')
const otherInput = document.querySelector('#other-title')
const selectRole = document.querySelector('select')
const selectColor = document.querySelector('#color')
const shirtColors = document.querySelectorAll('#color option')
const shirtDesign = document.querySelector('#design')
const registerForActivities = document.querySelector('.activities')
const activities = document.querySelectorAll('.activities input')
let totalActivityCost = 0;

// set focus on the first field 

window.onload = (event) => {
    nameInput.focus();
};

// Job role section

otherInput.style.display = "none"

selectRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
})

//T-Shirt info section

for (let i = 0; i < shirtColors.length; i++) {
    shirtColors[i].hidden = true;
}



shirtDesign.addEventListener('change', (e) => {
    shirtDesign.firstElementChild.hidden = true;
    const theme = e.target.value;

    if (theme == 'js puns') {
        let jsPunsColors = [];
        for (let i = 0; i < shirtColors.length; i++) {
            if (shirtColors[i].innerHTML.toLowerCase().includes(theme)) {
                jsPunsColors.push(shirtColors[i])
                jsPunsColors[0].selected = true;
                shirtColors[i].hidden = false;

            } else {
                shirtColors[i].hidden = true;
            }

        }
    } else if (theme == 'heart js') {
        let iLoveJsColors = [];
        for (let i = 0; i < shirtColors.length; i++) {
            shirtColors[i].hidden = false;
            if (shirtColors[i].innerHTML.toLowerCase().includes('js puns') ||
                shirtColors[i].innerHTML.toLowerCase().includes('please')) {
                shirtColors[i].hidden = true;
            } else {
                iLoveJsColors.push(shirtColors[i])
                iLoveJsColors[0].selected = true;

            }

        }

    }
})

// Register for activities

const newParagraph = document.createElement('p');
registerForActivities.appendChild(newParagraph);


registerForActivities.addEventListener('change', (e) => {
    const activity = e.target
    const activityDataCost = parseInt(activity.getAttribute('data-cost'))


    if (activity.checked) {
        totalActivityCost += activityDataCost
    } else {
        totalActivityCost -= activityDataCost
    }
    const totalCostParagraph = document.querySelector('.activities p')
    totalCostParagraph.textContent = ` Total: $ ${totalActivityCost}`

    const activityDayAndTime = activity.getAttribute('data-day-and-time')

    for (let i = 0; i < activities.length; i++) {
        let currentActivity = activities[i].getAttribute('data-day-and-time');
        if (activityDayAndTime === currentActivity && activity !== activities[i]) {
            if (activity.checked) {
                activities[i].disabled = true;
            } else {
                activities[i].disabled = false;
            }
        }

    }


})


//Payment section

const selectPayment = document.querySelector('#payment')
const selectPaymentMethod = selectPayment.firstElementChild.hidden = true;
const creditCardSection = document.querySelector('.credit-card');
const payPalSection = document.querySelector('.paypal')
const bitcoinSection = document.querySelector('.bitcoin')

creditCardSection.selected=true;
payPalSection.hidden=true;
bitcoinSection.hidden=true;


selectPayment.addEventListener('change', (e) => {
    const paymentMethod = e.target.value
    if (paymentMethod === 'credit card') {
       creditCardSection.hidden = false;
       payPalSection.hidden = true;
       bitcoinSection.hidden = true; 
    } else if (paymentMethod ==='paypal') {
        payPalSection.hidden = false;
        creditCardSection.hidden = true;
        bitcoinSection.hidden = true; 
    } else if (paymentMethod === 'bitcoin'){
        bitcoinSection.hidden = false; 
        payPalSection.hidden = true;
        creditCardSection.hidden = true;
             
    }
creditCardSection.selected= true;
})



