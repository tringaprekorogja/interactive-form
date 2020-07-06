const nameInput = document.querySelector('#name')
const otherInput = document.querySelector('#other-title')
const selectRole = document.querySelector('select')

window.onload = (event) => {
    nameInput.focus();
  };


otherInput.style.display = "none"

selectRole.addEventListener('change', (e)=>{
    console.log(e.target.value)
   if(e.target.value == 'other') {
    otherInput.style.display = "block"; 
   } else {
    otherInput.style.display = "none"; 
   }
})


