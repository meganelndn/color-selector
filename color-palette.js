"use strict";

window.addEventListener("DOMContentLoaded", init);

let HTML = {}

function init() {
    HTML.hexElement = document.querySelector(".getColor");

    showHex();

    let rgbColors = showRgb();
    let hslColors = showHsl(rgbColors);
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

// HEX to RGB
function showRgb() {

    // when color selected, new function showing hex code
    HTML.hexElement.oninput = function () {

        // display # of color dynamically in console
        let hexValue = document.querySelector("input[type=color]").value;

        // get r = red
        const r = parseInt(hexValue.substr(1, 2), 16);
        // get g = green
        const g = parseInt(hexValue.substr(3, 2), 16);
        // get b = blue
        const b = parseInt(hexValue.substr(5, 2), 16);

        // make RGB code appear dynamically on page == "HEX: #c0ffee"
        document.querySelector(".rgbCode").textContent = `RGB: ${r}, ${g}, ${b}`;
        document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;

        document.querySelector(".selectedBaseColor").style.backgroundColor = this.value;

        const rgbObject = {
            r: `${r}`,
            g: `${g}%`,
            b: `${b}%`
        }

        const rgbCode = Object.create(rgbObject);
        console.log(rgbObject)

        showHsl(r, g, b)

        return rgbObject;
    }
}

// RGB to HSL
function showHsl(r, g, b) {

    let h, s, l;

    r /= 255;
    g /= 255;
    b /= 255;

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

    s *= 100;
    l *= 100;

    /*  if (parseInt(h) == "false") {
        document.querySelector(".hslCode").textContent = "";
    } else {
        document.querySelector(".hslCode").textContent = `HSL: ${parseInt(h)}, ${parseInt(s)}%, ${parseInt(l)}%`;
    }
 */
    document.querySelector(".hslCode").textContent = `HSL: ${parseInt(h)}, ${parseInt(s)}%, ${parseInt(l)}%`;

    // create object in which to store hsl variables, to pass onto next functions
    const hslObject = {
        h: `${parseInt(h)}`,
        s: `${parseInt(s)}%`,
        l: `${parseInt(l)}%`
    }

    const hslCode = Object.create(hslObject);
    console.log(hslObject)


    return hslObject;
}

/* function showAnalogous(hslCodeObject) {
    console.log(hslCodeObject)
} */