const nameInput = document.querySelector('#name')
const otherInput = document.querySelector('#other-title')
const selectRole = document.querySelector('select')
const selectColor = document.querySelector('#color')
//const shirtColors = document.querySelectorAll('#color option')
const shirtDesign = document.querySelector('#design')


window.onload = (event) => {
    nameInput.focus();
};

otherInput.style.display = "none"

selectRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
})



const shirtColors = document.querySelectorAll('#color option')
console.log(shirtColors)

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




