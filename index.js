const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let myLeads = [];

// using local-storage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
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
