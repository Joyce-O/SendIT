// Toggle between accordion
const accordion = document.getElementsByClassName("accordion");
let activeItem = -1;
// Iterate through the element and get the clicked class
for (let current = 0; current < accordion.length; current++) {
    accordion[current].addEventListener('click', function() {
        accordion[current].style.borderRight = "thick solid gray";
        // remove the currently displayed element
        if (current !== activeItem && activeItem !== -1) {
            accordion[activeItem].classList.remove('active');
            accordion[activeItem].style.borderRight = 'none';
            accordion[activeItem].nextElementSibling.classList.remove('panel-open');
        } 
        // open the clicked item
        
        this.nextElementSibling.classList.toggle('panel-open');
        activeItem = this.classList.toggle('active') ? current : -1;
        
        // Hide the list and open when no item is active
        const displayList = document.querySelector('.display-list');
        if(current === activeItem){
            displayList.style.display = 'none';
            } else {
            displayList.style.display = 'block';
        }
    });
}

let accordion2 = document.getElementsByClassName("dashboard-accordion");
for (i of accordion2) {
  i.addEventListener("click",  function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// const is_exist = document.getElementById('exist');
const modal = document.getElementById("modal2");
const authForm = document.getElementById('auth-form2');


const modalForm = (event) => {
  if (event.target.id === 'signup2') {
    modal.style.display = 'block';
    authForm.style.display = 'block';

  }
};
const signup = document.querySelector('#signup2');
signup.addEventListener('click', modalForm);
window.onclick = (event) => {
  if (event.target === modal || event.target.id === 'close-signup') {
    modal.style.display = 'none';
  }
};

const btnEdit = document.querySelector('#btn-edit');
var inputName1 = document.getElementById('name-edit');
var inputName2 = document.getElementById('email-edit');
var inputName3 = document.getElementById('phone-edit');
var inputName4 = document.getElementById('address-edit');
const toggleReadonly = (event) => {
 
  if (event.target.id === 'btn-edit') {
    inputName1.setAttribute('readonly', true);
    inputName2.setAttribute('readonly', true);
    inputName3.setAttribute('readonly', true);
    inputName4.setAttribute('readonly', true);

  } else {
      inputName.removeAttribute('readonly');
  }
}

btnEdit.addEventListener('click', toggleReadonly);