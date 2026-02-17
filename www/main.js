"use strict";

const btn = document.getElementById("btn");
const radiusInput = document.getElementById("radius");
const scene = document.getElementById("circle");

let input;
let circleArray = [];
let squareArray = [];

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
    squareArray.push(square);
    showArrays();
}

function showArrays(){
    // alles löschen
    const all = Array.from(scene.getElementsByTagName("p"));
    all.forEach(element => {
        element.remove();
    });

    // Summe von allen Rechtecken und Kreisen
    const result = addAll();
    const sum = document.createElement("p");
    sum.textContent = "Summe von Kreisen = " + result.circ() + " Summe von Rechtecken: " + result.square();
    scene.appendChild(sum);
    scene.appendChild(document.createElement("p"));

    // Sortierung
    circleArray.sort((a, b) => a.square() - b.square());
    squareArray.sort((a, b) => a.square() - b.square());

    // Ausgabe
    for(let i = 0; i < circleArray.length; i++) {
        const circleElement = document.createElement("p");
        circleElement.textContent = circleArray[i].toString();
        scene.appendChild(circleElement);

        const squareElement = document.createElement("p");
        squareElement.textContent = squareArray[i].toString();
        scene.appendChild(squareElement);
    }
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

function addAll(){
    return {
        circ: function(){
            return circleArray.reduce((acc, num) => {
              return acc + num.square();
          }, 0);
        },
        square: function(){
            return squareArray.reduce((acc, num) => {
                return acc + num.square();
            }, 0);
        }
    };
}