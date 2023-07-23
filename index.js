const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

// using local-storage

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();

  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  myLeads.forEach((item) => {
    listItems += `<li> 
    <a target='_blank' href=${item} >
    ${item} 
    </a>
    </li>`;
  });

  ulEl.innerHTML = listItems;
}
