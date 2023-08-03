const tasks = ["Buy milk", "Learn JS", "Nail JS", "East dinner"];

const un_list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const updateList = () => {
  un_list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];
    un_list.appendChild(li);
  }
};

btn.addEventListener("click", function () {
  const task = input.value;
  tasks.push(task);
  input.value = "";
  updateList();
});

updateList();
