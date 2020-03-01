class Face {
  private edge: number;

  constructor(edge: number) {
    this.edge = edge;
  }

  public addEdge() {
    this.edge++;
  }

  protected getEdge() {
    return this.edge;
  }
}

class Rect extends Face {
  constructor() {
    super(4)
  }

  public getEdge() {
    // return this.edge // Error
    return this.getEdge()
  }
}

const rect = new Rect();
console.log(rect.getEdge());
//console.log(rect.edge); // Error