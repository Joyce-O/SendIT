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

const modal = document.getElementById("modal2");
const authForm = document.getElementById('auth-form2');


const modalForm = (event) => {
  if (event.target.id === 'signup2') {
    modal.style.display = 'block';
    authForm.style.display = 'block';

  }
};
document.querySelector('#signup2').addEventListener('click', modalForm);
// document.querySelector('#signup').addEventListener('click', modalForm);
// const signupMain = document.querySelector('#signup');
// signup.addEventListener('click', modalForm);
window.onclick = (event) => {
  if (event.target === modal || event.target.id === 'close-signup') {
    modal.style.display = 'none';
  }
};
