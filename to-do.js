document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".inp");
  const items = document.querySelector(".items");
  const addBtn = document.querySelector(".btn");

  // Load existing items from localStorage
  showData();

  addBtn.addEventListener("click", addItem);

  items.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      toggleItem(e.target);
    } else if (e.target.tagName === "SPAN") {
      deleteItem(e.target.parentElement);
    }
  });

  function addItem() {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      alert("You must enter valid input!");
      return;
    }
    const li = document.createElement("li");
    li.textContent = inputValue;
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    items.appendChild(li);
    input.value = "";
    saveData();
  } 

  function toggleItem(item) {
    item.classList.toggle("checked");
    saveData();
  }

  function deleteItem(item) {
    item.remove();
    saveData();
  }

  function saveData() {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("data", items.innerHTML);
    } else {
      console.log("localStorage is not supported in this browser.");
    }
  }

  function showData() {
    if (typeof Storage !== "undefined") {
      items.innerHTML = localStorage.getItem("data") || "";
    } else {
      console.log("localStorage is not supported in this browser.");
    }
  }
});
