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

const toggleNav = document.querySelector("#toggleNav");
const open = document.getElementById("open");

 const switchForm = () => {
     console.log("Clickde");
     if (open.style.display === "none"){
       return open.style.display = "flex";   
    }else{
        return open.style.display = "none";
    }

};


toggleNav.addEventListener('click', switchForm);



// const signup = document.getElementById('signup');
// const is_exist = document.getElementById('exist');
// const modal = document.getElementById("modal");
// const auth_form = document.getElementById('auth-form');

// const modalForm = (event) => {
//     if (event.target === signup) {
//         modal.style.display = 'block';
//         auth_form.style.display = 'block';
//     }
// };

// signup.addEventListener('click', modalForm);

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
