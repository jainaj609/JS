document.getElementById("createList").addEventListener('click', createList);
document.getElementById("close").addEventListener('click', removeListForm);
document.getElementById("addList").addEventListener('click', createCard);
let cards = [];
function createList() {
    console.log("List created");
    document.getElementsByClassName("listForm")[0].style.display = "block";
}

function removeListForm() {
    console.log("List closed");
    document.getElementsByClassName("listForm")[0].style.display = "none";
}

function createCard() {
    console.log("Create card");
    document.getElementsByClassName("listForm")[0].style.display = "none";

    let title = document.createElement("h4");
    title.innerText = document.getElementById("listName").value;// read the value from the form

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";

    let del = document.createElement("i");
    del.className = "fa fa-trash";

    let list = document.createElement("div");
    list.append(title, del, icon);

    del.addEventListener("click", function removeElement() {
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
        for (let i=0; i<n.length; i++){
            lists.appendChild(n[i]);
        }
    }

}