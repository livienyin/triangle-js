// s = perimeter/2

function triangle(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.area = function () {
        var s = ((this.sideA + this.sideB + this.sideC) / 2);
        var trianglearea = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return trianglearea;
    };
}

var mytriangle = new triangle(3, 4, 5);
alert("Triangle area is " + mytriangle.area());
