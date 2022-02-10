class Shape {
  constructor() {}

  addDiv() {
    let div = $("<div><p>new div</p></div>");
    div.appendTo("#shapes");
  }

  describe() {}
}
let s1 = new Shape();
s1.addDiv();

class Circle extends Shape {
  constructor() {
    super();
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();

    this.height = height;
    this.width = width;
    let div = $("<div>");
    div.css("background", "green");
    div.css("height", height);
    div.css("width", width);
    div.appendTo($("#shapes"));
  }
}
$("#rectBtn").on("click", function () {
  let r1 = new Rectangle($("#rheight").val(), $("#rwidth").val());
  // this.height = $("#rheight").val();
  // this.width = $("#rwidth").val();
  // console.log(`height: ${this.height}, width: ${this.width}`);
  console.log(r1);
});

class Square extends Shape {
  constructor() {
    super();
  }
}
