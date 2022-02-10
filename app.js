class Shape {
  constructor() {}

  addDiv() {
    let div = $("<div>");
    div.appendTo("#shapes")
  }

  describe() {

  }
}

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
    this.height = height;
    this.width = width;
    super();
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
}

