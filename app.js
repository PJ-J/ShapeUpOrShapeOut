class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  describe() {}
}

class Circle extends Shape {
  constructor(height, width) {
    super(height, width);

    let div = $("<div>");
    div.css("background", "purple");
    div.css("height", height);
    div.css("width", width);
    div.css("border-radius", "50%");
    div.appendTo($("#shapes"));
  }
}
$("#circleBtn").on("click", function () {
  let c1 = new Circle($("#radius").val(), $("#radius").val());

  console.log(c1);
});

class Triangle extends Shape {
  constructor(height, width) {
    super(height, width);

    let div = $("<div>");
    // div.css("background", "yellow");
    div.css("height", "0");
    div.css("width", "0");
    div.css("border-bottom", `${height}px solid yellow`);
    div.css("border-right", `${height}px solid transparent`);
    div.appendTo($("#shapes"));
  }
}
$("#triBtn").on("click", function () {
  let t1 = new Triangle($("#triHeight").val(), $("#triHeight").val());

  console.log(t1);
});

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);

    let div = $("<div>");
    div.css("background", "green");
    div.css("height", height);
    div.css("width", width);
    div.appendTo($("#shapes"));
  }
}
$("#rectBtn").on("click", function () {
  let r1 = new Rectangle($("#rheight").val(), $("#rwidth").val());

  console.log(r1);
});

class Square extends Shape {
  constructor(height, width) {
    super(height, width);

    let div = $("<div>");
    div.css("background", "red");
    div.css("height", height);
    div.css("width", width);
    div.appendTo($("#shapes"));
  }
}
$("#squBtn").on("click", function () {
  let s1 = new Square($("#sideLength").val(), $("#sideLength").val());

  console.log(s1);
});
