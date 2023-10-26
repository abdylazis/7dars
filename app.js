const list = document.querySelector("#list");
const form = document.querySelector("form");
const input = document.querySelector("input");
const small = document.querySelector("small");

function addItem(text) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "delete";
  button.setAttribute("id", "delete");
  item.textContent = text;
  item.classList.add("item");
  item.append(button);
  list.appendChild(item);
}

function alert(message) {
  small.textContent = message;
  small.classList.remove("hidden");
  setTimeout(() => {
    small.classList.add("hidden");
  }, 3000);
}

//events

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length == 0) {
    alert("Iltimos nimadir kiriting!");
  } else if (input.value.length <= 4) {
    alert("Iltimos 4 tadan ko'proq ma'lumot kiriting !");
  } else {
    addItem(input.value);
    input.value = "";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "delete") {
    e.target.parentElement.remove();
  }
});
