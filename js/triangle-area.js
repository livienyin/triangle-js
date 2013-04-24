

function triangleArea() {
    var s = ((this.sideA + this.sideB + this.sideC)/2);
    var area = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    return area;
};

