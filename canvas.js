const canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d');
// square.
c.fillText('This is a canvas', 350, 100, 200)
c.fillRect(100, 200, 20, 200);

// define color,  color needs to defined before the square.
c.fillStyle = 'rgba(222, 0, 0, 0.3)';
c.fillRect(300, 300, 200, 600);
// c.fillRect(x, y, width, hight) 

// Lines
c.beginPath(50, 300); // x, y
c.moveTo(330, 100);
c.lineTo(400, 300); 
c.lineTo(200, 600); 
c.strokeStyle = '#ff00ff'
c.stroke();

// Arc / Circle
// c.beginPath(50, 300); // x, y starts a new path
// // c.arc(x, y, radiius, startangle, end angle, anticlockwise )
// c.arc(300, 100, 20, 0, Math.PI * 2, false);
// c.strokeStyle = '#40555f'
// c.stroke();

for (let index = 0; index < 1200; index++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  // const element = array[index];
    c.beginPath(); // x, y starts a new path
  // c.arc(x, y, radiius, startangle, end angle, anticlockwise )
  c.arc(x, y, 20, 0, Math.PI * 2, false);
  // c.strokeStyle = '#40555f'
  c.fillStyle = 'rgba(222,77, 22, 0.3)';
  c.stroke();   
}