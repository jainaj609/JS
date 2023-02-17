const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");
console.log(optionsContainer.length);

const buttonPressed = e => {
    // console.log(e.target.id);  // Get ID of Clicked Element
    const selected_ID = document.querySelector(`#${e.target.id}`);
    
    for(let i=0; i<optionsContainer.length; i++){
        if(optionsContainer[i].nextElementSibling.id==e.target.id)
        optionsContainer[i].classList.add("active");
        if(optionsContainer[i].nextElementSibling.id!=e.target.id)
        optionsContainer[i].classList.remove("active");
    }
    
    const optionsList = document.querySelectorAll(".active>.option");
    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selected_ID.innerHTML = o.querySelector("label").innerHTML;
            selected_ID.previousElementSibling.classList.remove("active");           
        });
    });
}

for (let select of selected) {
    select.addEventListener("click", buttonPressed);
}



