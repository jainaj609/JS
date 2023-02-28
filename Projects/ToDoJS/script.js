document.getElementById("createList").addEventListener('click', createList);
document.getElementById("close").addEventListener('click', removeListForm);
document.getElementById("addList").addEventListener('click', createCard);
let cards = [];
let opacity = document.querySelector(".opacity");

function createList() {
    console.log("List created");
    document.querySelector(".info_to_empty_text").innerHTML = "";
    opacity.style.display = "block";
    let container_height = document.getElementById("container");
    opacity.style.height = `${container_height.offsetHeight+100}px`;

    document.getElementsByClassName("listForm")[0].style.display = "flex";
}

function removeListForm() {
    console.log("List closed");
    document.getElementsByClassName("listForm")[0].style.display = "none";
    opacity.style.display = "none";
}

function createCard() {
    console.log("Create card");
    document.getElementsByClassName("listForm")[0].style.display = "none";
    opacity.style.display = "none";

    let title = document.createElement("p");
    title.className = "task_title";
    title.innerText = document.getElementById("listName").value;// read the value from the form


    let hr = document.createElement("hr");
    hr.className = "hrline";

    let items = document.createElement("div");
    items.className = "items";

    let plus_icon = document.createElement("i");
    plus_icon.className = "fa-solid fa-plus plus_icon";

    let del_icon = document.createElement("i");
    del_icon.className = "fa fa-trash del_icon";

    let icons = document.createElement("div");
    icons.className = "icons";
    icons.append(del_icon,plus_icon);

    let list = document.createElement("div");
    list.className = "child";
    list.append(title,hr,icons);

    del_icon.addEventListener("click", function removeElement() {
        let tempArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] !== list)
                tempArray.push(cards[i]);
        }
        cards = tempArray;
        display(cards);
    });

    cards.push(list);
    display(cards);


    function display(n) {
        let lists = document.getElementById("lists");
        lists.innerHTML = "";
        for (let i = 0; i < n.length; i++) {
            lists.appendChild(n[i]);
        }
    }

}