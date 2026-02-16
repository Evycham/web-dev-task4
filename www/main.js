"use strict";

const btn = document.getElementById("btn");
const radiusInput = document.getElementById("radius");
const circles = document.getElementById("circle");

let input;
let circleArray = [];

btn.addEventListener("click", createCircle);

function createCircle(e) {
    e.preventDefault();

    input = parseFloat(radiusInput.value);

    let circle = {
        radius: input,
        square: function(){
            return Math.PI * Math.pow(this.radius, 2);
        },
        toString(){
            return "Kreis Radius: " + this.radius + " Fläche: " + this.square();
        }
    };

    let square = {
        a: input,
        square: function(){
            return this.a * this.a;
        },
        toString(){
            return "Länge: " + this.a + " Fläche: " + this.square();

        }
    }

    circleArray.push(circle);
    circleArray.push(square);
    showArrays();
}

function showArrays(){
    const all = Array.from(circles.getElementsByTagName("p"));
    all.forEach(element => {
        element.remove();
    });

    circleArray.forEach(element => {
        const circleElement = document.createElement("p");
        circleElement.textContent = element.toString();
        circles.appendChild(circleElement);
    });
}

// class
class Circle {
    constructor(radius, square){
        this.radius = radius;
        this.square = square;
    }

    print(){
        return "Radius: " + this.radius + " Fläche: " + this.square;
    }
}