const signup = document.getElementById('signup');
const is_exist = document.getElementById('exist');
const modal = document.getElementById("modal");
const auth_form = document.getElementById('auth-form');

const modalForm = (event) => {
    if (event.target === signup) {
        modal.style.display = 'block';
        auth_form.style.display = 'block';
    }
};

signup.addEventListener('click', modalForm);

