const canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d');

c.fillText('This is a canvas', 350, 100, 200)
c.fillRect(100, 200, 20, 200);