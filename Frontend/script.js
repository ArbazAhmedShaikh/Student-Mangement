const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter a name.");
        return;
    }

    const li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);

    document.getElementById("name").value = "";
});
