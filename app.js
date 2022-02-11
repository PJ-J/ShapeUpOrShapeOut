class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    this.radius = radius;
  }
  buildCircle() {
    let div = $("<div>");
    div.id = "circle";
    div.css("height", this.radius);
    div.css("width", this.radius);
    div.css("border-radius", "50%");
    div.css("background", "purple");
    div.appendTo($("#shapes"));
  }
  describe() {
    console.log("describe");
  }
}
$("#circleBtn").on("click", function () {
  let c1 = new Circle($("#radius").val());

  c1.buildCircle();

  console.log(c1);
});
$("<div>").on("click", function() {
  describe();
});

class Triangle extends Shape {
  constructor(height) {
    super();
    this.height = height;
  }
  makeTriangle() {
    let div = $("<div>");
    div.css("height", "0");
    div.css("width", "0");
    div.css("border-bottom", `${this.height}px solid yellow`);
    div.css("border-right", `${this.height}px solid transparent`);
    div.appendTo($("#shapes"));
  }
}
$("#triBtn").on("click", function () {
  let t1 = new Triangle($("#triHeight").val());
  t1.makeTriangle();

  console.log(t1);
});

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }
  makeRectangle() {
    let div = $("<div>");
    div.css("background", "green");
    div.css("height", this.height);
    div.css("width", this.width);
    div.appendTo($("#shapes"));
  }
}
$("#rectBtn").on("click", function () {
  let r1 = new Rectangle($("#rheight").val(), $("#rwidth").val());
  r1.makeRectangle();
  console.log(r1);
});

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }
  makeSquare() {
    let div = $("<div>");
    div.css("background", "red");
    div.css("height", this.sideLength);
    div.css("width", this.sideLength);
    div.appendTo($("#shapes"));
  }
}
$("#squBtn").on("click", function () {
  let s1 = new Square($("#sideLength").val(), $("#sideLength").val());

  s1.makeSquare();

  console.log(s1);
});
