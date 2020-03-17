export function drawPaths(context, points) {
  points.map(point => {
    context.beginPath();
    context.fillStyle = "red";
    context.ellipse(point.x, point.y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });
  context.beginPath();
  for (let i = 0; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
  context.closePath();
}

export function drawLabels(context, spaces) {
  context.fillStyle = "red";
  spaces.map(space => {
    const center = getCenter(space.points);
    context.fillText(space.name, center[0], center[1]);
  });
}

function getCenter(points) {
  let totalX = 0;
  let totalY = 0;
  for (const point of points) {
    totalX += point.x;
    totalY += point.y;
  }
  return [totalX / points.length, totalY / points.length];
}
