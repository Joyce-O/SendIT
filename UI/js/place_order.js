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