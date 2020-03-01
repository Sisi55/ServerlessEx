class Face {
  protected edge: number;

  constructor(edge: number) {
    this.edge = edge;
  }
}

class Rect extends Face {
  constructor() {
    super(4)
  }

  public getEdge() {
    return this.edge
  }
}

const rect = new Rect();
console.log(rect.getEdge());
//console.log(rect.edge);