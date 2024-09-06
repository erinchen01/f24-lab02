import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js";
import { square } from "./shapes/square.js";
import { Shape } from "./shapes/shape.js";


const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const circleShape: Shape = circle(5);
const circleRenderer = newRenderer(circleShape)
circleRenderer.draw();

const squareShape: Shape = square(5);
const squareRenderer = newRenderer(squareShape)
squareRenderer.draw();
