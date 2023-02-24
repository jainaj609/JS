const selected = document.querySelectorAll('.selected');
const optionsContainer = document.querySelectorAll('.options-container');

let value1;
let value2;
let value3;
let value4;
function selectClick(e) {
    // console.log(e.target.id);

    for (let i = 0; i < optionsContainer.length; i++) {
        // console.log(optionsContainer[i]);
        if (optionsContainer[i].nextElementSibling.id == e.target.id)
            optionsContainer[i].classList.toggle("active");
        if (optionsContainer[i].nextElementSibling.id != e.target.id)
            optionsContainer[i].classList.remove("active");
    }
    const options = document.querySelectorAll('.active>.option');
    const selected_ID = document.querySelector(`.selected#${e.target.id}`);

    options.forEach(option => {
        option.addEventListener('click', optionSelected);

        function optionSelected() {
            selected_ID.innerText = option.querySelector('label').innerHTML;
            selected_ID.previousElementSibling.classList.remove("active");

            if (option.querySelector('input').name == "wakeup") {
                value1 = option.querySelector('input').value;
            }
            if (option.querySelector('input').name == "lunch")
                value2 = option.querySelector('input').value;
            if (option.querySelector('input').name == "nap")
                value3 = option.querySelector('input').value;
            if (option.querySelector('input').name == "night")
                value4 = option.querySelector('input').value;
        }
    });
}

for (let select of selected) {
    select.addEventListener('click', selectClick);
}

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    // console.log(hours, mins, secs);

    if (hours > 12) {
        hours -= 12;
        document.querySelector('.am_pm').innerText = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    document.querySelector('.hms>.hour').innerHTML = hours;
    document.querySelector('.hms>.min').innerText = mins;
    document.querySelector('.hms>.sec').innerText = secs;

}
setInterval(clock, 1000);

const btn = document.getElementById("button");
btn.addEventListener('mouseover', function () {
    this.innerText = "Party Time";
    this.setAttribute('style', 'background-image: linear-gradient(90deg, #CB52F8 50.25%, #6E54EC)');

});
btn.addEventListener('mouseout', function () {
    this.innerText = "Set Time";
    this.setAttribute('style', 'background-image: linear-gradient(90deg, #6E54EC, #CB52F8 50.25%)');

});


btn.addEventListener('click', changeTextImage);

function changeTextImage() {
    let date = new Date();
    let hours = date.getHours();
    const textToChange = document.querySelector("div.set_msg2");
    const imageToChange = document.querySelector("div.img1");

    const optionsContainer1 = document.querySelectorAll(".options-container")[0];
    console.log(optionsContainer1);
    const optionsContainer2 = document.querySelectorAll(".options-container")[1];
    const optionsContainer3 = document.querySelectorAll(".options-container")[2];
    const optionsContainer4 = document.querySelectorAll(".options-container")[3];


    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);

    // for (let i = 0; i < 2; i++) {
// console.log(value1);
console.log(hours);
        if (parseInt(value1) === hours) {
            textToChange.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
            textToChange.style.cssText = "padding: 35px;";
            imageToChange.style.backgroundImage = "url('./Images/Component\ 30\ –\ 1/Component 30 – 1.png')";
            document.querySelector("div.popup2").style.display = "block";
           
        }
        else if (parseInt(value2) === hours) {
            textToChange.innerText = "LET'S HAVE SOME LUNCH !!";
            textToChange.style.cssText = "padding: 35px;";
            imageToChange.style.backgroundImage = "url('./Images/Component\ 31\ –\ 1.svg')";
            document.querySelector("div.popup2").style.display = "none";
        }
        else if (parseInt(value3) === hours) {
            textToChange.style.cssText = "padding: 17px 32px; text-align: left;";
            textToChange.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            imageToChange.style.cssText = "background-image: url('./Images/lunch_image/lunch_image.png')";
            document.querySelector("div.popup2").style.display = "none";
        }
        else if (parseInt(value4) === hours) {
            textToChange.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
            textToChange.style.cssText = "padding: 35px 20px;";
            imageToChange.style.cssText = "background-image: url('./Images/Component 32 – 1/Component 32 – 1.png')";
            document.querySelector("div.popup2").style.display = "none";
        }

    }

    document.querySelector("span.wakeupTime").innerText = selected[0].innerText;
    document.querySelector("span.lunchTime").innerText = selected[1].innerText;
    document.querySelector("span.napTime").innerText = selected[2].innerText;
    document.querySelector("span.nightTime").innerText = selected[3].innerText;
// }





let date = new Date();
let hours = date.getHours();

let set_msg = document.getElementById("set_msg");

if (hours >= 4 && hours < 12) {
    set_msg.innerText = "GOOD MORNING!! WAKE UP !!";
}

if (hours >= 12 && hours < 16) {
    set_msg.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
}

if (hours >= 16 && hours < 21) {
    set_msg.innerText = "GOOD EVENING !!";
}
if (hours >= 21 && hours < 24) {
    set_msg.innerText = "GOOD NIGHT !!";
}
if (hours >= 0 && hours < 4) {
    set_msg.innerText = "GOOD NIGHT !!";
}