const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

let x = 20;
let animando = false;

function dibujar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(400,80,60,80);

    ctx.fillStyle = 'blue';
    ctx.arc(x,120,20,0,Math.PI*2);
    ctx.fill();

    if (animando && x <380){
        x += 2;
        requestAnimationFrame(dibujar);
    }
}

function inicial(){
    animando = true;
    dibujar();
}

dibujar();