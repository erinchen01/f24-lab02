package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Square;

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(2, 3);

        Renderer recRenderer = new Renderer(rectangle);

        recRenderer.draw();

        Circle circle = new Circle(5);
        Renderer circleRenderer = new Renderer(circle);
        circleRenderer.draw();

        Square square = new Square(5);
        Renderer squareRenderer = new Renderer(square);
        squareRenderer.draw();

    }
}
