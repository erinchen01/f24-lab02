import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js";
import { square } from "./shapes/square.js";

const rectangle: Rectangle = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const circleShape = circle(5);
const circleRenderer = newRenderer(circleShape)
circleRenderer.draw();

const squareShape = square(5);
const squareRenderer = newRenderer(squareShape)
squareRenderer.draw();
