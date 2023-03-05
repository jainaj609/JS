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
    opacity.style.height = `${container_height.offsetHeight + 100}px`;

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

    plus_icon.addEventListener("click", function(){
        showtasks(items)
    }); 
    
    let del_icon = document.createElement("i");
    del_icon.className = "fa fa-trash del_icon";

    let icons = document.createElement("div");
    icons.className = "icons";
    icons.append(del_icon, plus_icon);

    let list = document.createElement("div");
    list.className = "child";
    list.append(title, hr, items, icons);

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
function showtasks(box) {

    opacity.style.display = "block";
    let container_height = document.getElementById("container");
    opacity.style.height = `${container_height.offsetHeight + 100}px`;

    document.getElementsByClassName("itemForm")[0].style.display = "flex";
    // document.querySelector(".popup_title").innerHTML = "Add New Item";
    document.getElementById("addTask").addEventListener('click', AddTasks);

    function AddTasks() {
        document.getElementsByClassName("itemForm")[0].style.display = "none";
        opacity.style.display = "none";
        console.log("addtasks");

        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");

        let label = document.createElement("label");
        label.innerText = document.getElementById("itemName").value;

        let task_box = document.createElement("div");
        task_box.className = "taskBox";
        task_box.append(input, label);

        box+=box.appendChild(task_box);

    }
    
    document.getElementById("closeTask").addEventListener('click', closeTasks);

    function closeTasks() {
        document.getElementsByClassName("listForm")[1].style.display = "none";
        opacity.style.display = "none";
    }
}