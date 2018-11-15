
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