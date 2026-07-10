const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

function drawRectangle(x, y, width, height, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
drawRectangle(50, 50, 150, 100, '#3b82f6');
