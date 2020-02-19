"use strict";
window.addEventListener("DOMContentLoaded", init);

let HTML = {}

function init() {
    HTML.hexElement = document.querySelector(".getColor");

    showHex();
    hexToRgb();
}

function showHex() {

    // when color selected, new function showing hex code
    HTML.hexElement.oninput = function () {

        // display # of color dynamically in console
        let hexValue = document.querySelector("input[type=color]").value;

        // make # appear dynamically on page == "HEX: #c0ffee"
        document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
}

function hexToRgb() {

    let hexValue = document.querySelector("input[type=color]").value;

    // get r = red
    const r = parseInt(hexValue.substr(1, 2), 16);
    // get g = green
    const g = parseInt(hexValue.substr(3, 2), 16);
    // get b = blue
    const b = parseInt(hexValue.substr(5, 2), 16);
    //???
    console.log(parseInt(hexValue.substr(1, 2), 16))
    console.log(parseInt(hexValue.substr(3, 2), 16))
    console.log(parseInt(hexValue.substr(5, 2), 16))

    // when color selected, new function showing hex code
    HTML.hexElement.oninput = function () {

        // display # of color dynamically in console
        let hexValue = document.querySelector("input[type=color]").value;

        // make RGB code appear dynamically on page == "HEX: #c0ffee"
        document.querySelector(".rgbCode").textContent = `RGB: ${r},${g},${b}`;
        document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
}

/* // RGB to HSL
function rgbToHsl(h, s, l) {
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
        h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
} */