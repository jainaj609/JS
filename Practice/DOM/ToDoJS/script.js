document.getElementById("createList").addEventListener('click', createList);
document.getElementById("close").addEventListener('click', removeListForm);
document.getElementById("addList").addEventListener('click', createCard);

function createList() {
    console.log("List created");

    document.getElementsByClassName("listForm")[0].style.display = "block";
    // document.getElementById("listForm").style.display = "block";
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

    let list = document.createElement("div");
    list.append(title, icon);

    let lists= document.getElementById("lists");
    lists.appendChild(list);


}