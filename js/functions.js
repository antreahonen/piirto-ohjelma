// functions.js
import { Circle } from './class/circle.js';
import { Line } from './class/Line.js';
import { Rectangle } from './class/Rectangle.js';
import { Square } from './class/Square.js';

const updateUI = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3;

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4;
        document.querySelector('div#fourth label').style.display = "inline-block";
        document.querySelector('div#fourth input').style.display = "inline-block";
    } else {
        document.querySelector('div#fourth label').style.display = "none";
        document.querySelector('div#fourth input').style.display = "none";
    } 
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const x_input = document.querySelector('#x');
const y_input = document.querySelector('#y');
const draw_button = document.querySelector('button');
const radio_form = document.querySelector('form');
const input_color = document.querySelector('input[type="color"]');
const input_width = document.querySelector('input[type="number"]');

draw_button.addEventListener('click', () => {
    const shape = document.querySelector('input[name="shape"]:checked').value;
    switch (shape) {
        case 'circle':
            drawCircle();
            break;
        case 'line':
            drawLine();
            break;
        case 'rectangle':
            drawRectangle();
            break;
        case 'square':
            drawSquare();
            break;
        default:
            break;
    }
});

function drawCircle() {
    const x = parseInt(x_input.value);
    const y = parseInt(y_input.value);
    const x2 = parseInt(document.getElementById('third').querySelector('input').value);
    const y2 = parseInt(document.getElementById('fourth').querySelector('input').value);
    
    // Laske ympyrän keskipiste
    const centerX = (x2 - x) / 2 + x;
    const centerY = (y2 - y) / 2 + y;

    // Laske ympyrän säde
    const radius = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2)) / 2;

    // Aseta väri
    ctx.strokeStyle = input_color.value;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
}

function drawLine() {
    // Toteuta viivan piirtäminen tässä
    const x1 = parseInt(x_input.value);
    const y1 = parseInt(y_input.value);
    const x2 = parseInt(document.getElementById('third').querySelector('input').value);
    const y2 = parseInt(document.getElementById('fourth').querySelector('input').value);
    
    // Aseta väri
    ctx.strokeStyle = input_color.value;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawRectangle() {
    // Toteuta suorakulmion piirtäminen tässä
    const x1 = parseInt(x_input.value);
    const y1 = parseInt(y_input.value);
    const width = parseInt(document.getElementById('third').querySelector('input').value);
    const height = parseInt(document.getElementById('fourth').querySelector('input').value);
    
    // Aseta väri
    ctx.strokeStyle = input_color.value;

    ctx.beginPath();
    ctx.rect(x1, y1, width, height);
    ctx.stroke();
}

function drawSquare() {
    // Toteuta neliön piirtäminen tässä
    const x1 = parseInt(x_input.value);
    const y1 = parseInt(y_input.value);
    const sideLength = parseInt(document.getElementById('third').querySelector('input').value);
    
    // Aseta väri
    ctx.strokeStyle = input_color.value;

    ctx.beginPath();
    ctx.rect(x1, y1, sideLength, sideLength);
    ctx.stroke();
}
