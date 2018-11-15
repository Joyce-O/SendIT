
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

