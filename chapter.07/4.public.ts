class Face {
  public edge: number;

  constructor(edge: number) {
    this.edge = edge;
  }
}

class Rect extends Face {
  constructor() {
    super(4)
  }
}

const rect = new Rect();
console.log(rect.edge);