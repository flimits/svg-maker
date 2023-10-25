const { Triangle, Circle, Square } = require('./shapes');

describe('CheckTriangle', () => {
    describe('is poly there', () => {
        it('the term polygon should be in svg file for triangle', () => {
            // Arrange
            const shouldBe = "polygon";
            // Act
            const triShape = new Triangle("purple", "white", "jason");
            // Assert
            expect(triShape.shape).toContain(shouldBe); // Check if the SVG string contains "polygon"
        });
    });
});

describe('CheckCircle', () => {
    describe('is a circle there', () => {
        it('the term circle should be in svg file for circle', () => {
            // Arrange
            const shouldBe = "circle";
            // Act
            const triShape = new Circle("purple", "white", "jason");
            // Assert
            expect(triShape.shape).toContain(shouldBe); // Check if the SVG string contains "polygon"
        });
    });
});

describe('CheckSquare', () => {
    describe('is rect there', () => {
        it('the term rect should be in svg file for square', () => {
            // Arrange
            const shouldBe = "rect";
            // Act
            const triShape = new Square("purple", "white", "jason");
            // Assert
            expect(triShape.shape).toContain(shouldBe); // Check if the SVG string contains "polygon"
        });
    });
});