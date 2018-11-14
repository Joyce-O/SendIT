const addActive = document.getElementById('add-parcel');
const addSubmit = document.getElementById('add-submit');
const activityTitle = document.getElementById('activity-title');
const addActivity = document.getElementById('add-activity');
const never = document.getElementById('never');
const form = document.getElementById('form');



const display = () => {
    activityTitle.style.display = "block";
    addActivity.style.display = "flex";
};
let id = 1;
const increment = () => {
    id += 1;

}
  
  const unsubmit = (event) => {
      //console.log(" I am clicked")
      event.preventDefault()
    //   let activity = document.getElementById('Activity').value;
    //   let note = document.getElementById('Note').value;
    //   let date = document.getElementById('Date').value;
    //   let time = document.getElementById('Time').value;
    let Date = document.querySelector('.date').value;
    let TrackingID = document.querySelector('.TrackingID').value;
    let ParcelContent = document.querySelector('.parcel-content').value;
    let location = document.getElementById('location').value;
    let status = document.querySelector('.status').value;
    let Edit = document.querySelector('.edit-col').value;
  
    // console.log(form + ". > actvity: "+ activity + ". note: "+note + ". date: "+ date + ". Time: "+ time );
     increment();
    const addActivities = document.createElement('DIV');
    addActivities.innerHTML = `<div class="order-history">
  <div class="order-column id">${id}</div>
    <div class="order-column date">${date}</div>
    <div  title="Click to see note" class="order-column parcel-content">${ParcelContent}</div>
    <div class="order-column location">${location}</div>
    <div class="order-column location">
    ${status}
    </div>
    <div class="order-column edit-col edit-body">

    </div>
    </div>
    <div class="dropdown3">
      <button onclick="myFunction()" class="dropbtn3">&#8942;</button>
        <div id="myDropdown3" class="dropdown-content3">
            <a class="edit" href="add-parcel.html">Edit
            <span class="edit-icon">&#9998;</span></a>
            <span class="delete">Delete
            <span class="delete-code">&#10799;</span>
            </span>
        </div>
        </div>
       </div>
</div>
`;
const up = document.querySelector('.order-wrapper');
// btn.addEventListener('click', markup);
up.appendChild(addActivities);
// userDataTable.innerHTML = `
};

  const close = () => {
    activityTitle.style.display = "none";
    addActivity.style.display = "none";
};
addActive.addEventListener('click', display);
addSubmit.addEventListener('click', unsubmit);
never.addEventListener('click', close);
// }
// window.load = onclk();