let celsiusInput = document.getElementById("celsius");
let fehrenheitInput = document.getElementById("fehrenheit");

console.log(celsiusInput);
console.log(fehrenheitInput);

celsiusInput.addEventListener('input', function () {
    console.log("cel changed")
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }

    fehrenheitInput.value = f;
})

fehrenheitInput.addEventListener('input', function () {
    console.log("fehrenheit changed")

    let f = this.value;
    let c= (f - 32) * 5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    celsiusInput.value = c;
})