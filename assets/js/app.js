import {
    fns
} from "./fn.js"

const title = document.getElementById('title')
const inputs = [...document.querySelectorAll('form input')];

for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener("click", function () {

        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";

        const currentValue = this.placeholder;
        title.innerHTML = currentValue;

        const myFn = fns;

        switch (currentValue) {
            case "Celsius":
                myFn.fnUno();
                break;
            case "Fehrenheit":
                myFn.fnDos();
                break;
            case "Kelvin":
                myFn.fnTres();
                break;
            case "Rankine":
                myFn.fnCuatro();
                break;
        }

    });

}