window.onload = function(){

const canvas = document.getElementById('fondo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];

for (let i = 0; i < 30; i++){
    circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * 1 - 0.5
    });
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(46, 125, 50, 0.4)";
        ctx.fill();

        circle.x += circle.dx;
        circle.y += circle.dy;

        if(circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
        if(circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

};
