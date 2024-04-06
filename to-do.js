const input = document.querySelector(".inp");
const items = document.querySelector(".items");
let add = document.querySelector(".btn");

add.addEventListener("click", function () {
  if (input.value === "") {
    alert("You must enter valid input!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    items.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

items.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else{
    e.target.parentElement.remove();
    saveData();
  }
},false);


function saveData(){
  localStorage.setItem("data",items.innerHTML);
}

function showData() {
  items.innerHTML = localStorage.getItem("data");
}

showData();