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
    // title.cssText="";
    title.innerText = document.getElementById("listName").value;// read the value from the form

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";

    let itembox = document.createElement("div");

    icon.addEventListener("click", function(){
        showtasks(itembox);
    })

    let del = document.createElement("i");
    del.className = "fa fa-trash";

    let list = document.createElement("div");
    list.append(title,itembox, del, icon);

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
function showtasks(box){
    document.getElementsByClassName("itemForm")[0].style.display = "block";

    document.querySelector('#itemList').addEventListener("click", function(){
        console.log("Add Button is pressed");
        let tag = document.createElement("li");
        tag.innerText = document.querySelector("#itemName").value;
        box+=box.appendChild(tag);
        document.getElementsByClassName("itemForm")[0].style.display = "none";
        document.querySelector(".itemForm").removeEventListener("click",showtasks);
    })

    document.querySelector("#exit").addEventListener("click",function(){
        console.log("Close Button is pressed");
        document.getElementsByClassName("itemForm")[0].style.display = "none";
    })

}