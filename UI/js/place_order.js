// Toggle between accordion
// const accordion = document.getElementsByClassName("accordion");
// let activeItem = -1;
// // Iterate through the element and get the clicked class
// for (let current = 0; current < accordion.length; current++) {
//     accordion[current].addEventListener('click', function() {
//         accordion[current].style.borderRight = "thick solid gray";
//         // remove the currently displayed element
//         if (current !== activeItem && activeItem !== -1) {
//             accordion[activeItem].classList.remove('active');
//             accordion[activeItem].style.borderRight = 'none';
//             accordion[activeItem].nextElementSibling.classList.remove('panel-open');
//         } 
//         // open the clicked item
        
//         this.nextElementSibling.classList.toggle('panel-open');
//         activeItem = this.classList.toggle('active') ? current : -1;
        
//         // Hide the list and open when no item is active
//         const displayList = document.querySelector('.display-list');
//         if(current === activeItem){
//             displayList.style.display = 'none';
//             } else {
//             displayList.style.display = 'block';
//         }
//     });
// }

// let accordion2 = document.getElementsByClassName("dashboard-accordion");
// for (i of accordion2) {
//   i.addEventListener("click",  function () {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

// const toggleNav = document.querySelector("#toggleNav");
// const open = document.getElementById("open");

//  const switchForm = () => {
//      console.log("Clickde");
//      if (open.style.display === "none"){
//        return open.style.display = "flex";   
//     }else{
//         return open.style.display = "none";
//     }

// };


// toggleNav.addEventListener('click', switchForm);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {

    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show3')) {
        openDropdown.classList.remove('show3');
      }
    }
  }
}
