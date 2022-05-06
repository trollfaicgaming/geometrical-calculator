// -- written by chapel1337 -- \\

// started on 5/5/2022
// finished 5/6/2022


let length
let width
let height
let radius

function surfaceAreaPrism() {
    let lengthInput = prompt("what is the length?");
    let widthInput = prompt("what is the width?");
    let heightInput = prompt("what is height?");

    if (lengthInput || widthInput || heightInput) {
        length = lengthInput;
        width = widthInput;
        height = heightInput;

        alert( 2 * length * width + 2 * length * height + 2 * width * height );
    }
}

function volumePrism() {
    let lengthInput = prompt("what is the length?");
    let widthInput = prompt("what is the width?");
    let heightInput = prompt("what is height?");

    if (lengthInput || widthInput || heightInput) {
        length = lengthInput;
        width = widthInput;
        height = heightInput;

        alert( length * width * height );
    }
}

function surfaceAreaCylinder() {
    let radiusInput = prompt("what is the radius?");
    let heightInput = prompt("what is the height?");

    if (heightInput || radiusInput) {
        radius = radiusInput;
        height = heightInput;

        // messy code
        alert( Math.round(2 * 3.14 * Math.pow(radius, 2) + 2 * 3.14 * radius * height) );
    }
}

function surfaceAreaCylinderPi() {
    let radiusInput = prompt("what is the radius?");
    let heightInput = prompt("what is the height?");

    if (heightInput || radiusInput) {
        radius = radiusInput;
        height = heightInput;

        // messier code
        alert( Math.round( Math.round(2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * height) / Math.PI) + "π" );
    }
}

function volumeCylinder() {
    let radiusInput = prompt("what is the radius?");
    let heightInput = prompt("what is the height?");

    if (heightInput || radiusInput) {
        radius = radiusInput;
        height = heightInput;

        alert( Math.PI * Math.pow(radius, 2) * height );
    }
}

function volumeCylinderPi() {
    let radiusInput = prompt("what is the radius?");
    let heightInput = prompt("what is the height?");

    if (heightInput || radiusInput) {
        radius = radiusInput;
        height = heightInput;

        alert( Math.PI * Math.pow(radius, 2) * height / Math.PI + "π" );
    }
}