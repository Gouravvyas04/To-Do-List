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

    // Create a button for cross
    const crossButton = document.createElement("button");
    crossButton.textContent = "\u00d7";

    // Add event listener to remove the item when the button is clicked
    crossButton.addEventListener("click", function () {
      this.parentNode.remove();
      saveData();
    });

    // Append the cross button to the list item
    li.appendChild(crossButton);

    // Append the list item to the list
    items.appendChild(li);

    // Clear the input field
    input.value = "";

    // Save the data
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
