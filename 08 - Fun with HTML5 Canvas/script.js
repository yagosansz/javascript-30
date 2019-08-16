const canvas = document.querySelector('#draw');

// You don't draw directly on the canvas, but on the context!
const ctx = canvas.getContext('2d');

// Canvas is responsive to window's size.
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

ctx.strokeStyle = 'peachpuff';
ctx.lineJoin = 'round'; // Determines the shape used to join two line segments where they meet.
ctx.lineCap = 'round'; // Determines the shape used to draw the end points of lines.

ctx.lineWidth = 52;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;
let direction = true // builds up... Works like a switch controlling ctx.lineWidth

// Called whenever mouse moves on top of the canvas.
function draw(event) {
    if(!isDrawing) return; // Stop the function from running when 'mousedown' is not active!

    console.log(event);
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start from:
    ctx.moveTo(lastX, lastY);
    // Go to: (* offsetX returns the x-coordinate of the mouse pointer, relative to the target element *)
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    // Update variables' coordinates
    [lastX, lastY] = [event.offsetX, event.offsetY] // Destructuring an array.

    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    if(ctx.lineWidth >= 52 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY] // Make sure it doesn't start at (0, 0).
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)