var matrixCanvas = document.getElementById('matrixCanvas');
var context = matrixCanvas.getContext('2d');

matrixCanvas.height = window.innerHeight;
matrixCanvas.width = window.innerWidth;

var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
characters = characters.split('');

var fontSize = 10;
var columns = matrixCanvas.width/fontSize;

var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1;

function drawMatrix() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px arial';

    for(var i = 0; i < drops.length; i++) {
        var text = characters[Math.floor(Math.random()*characters.length)];
        context.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > matrixCanvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

