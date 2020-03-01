class Face {
  readonly vertex: number = 3;
  readonly edge: number;
  constructor(edge: number) {
    this.edge = edge;
  }

  public eddEdge() {
    this.edge++; // TS2540: Cannot assign to 'edge' because it is a read-only property.
  }
}

const face = new Face(5);
console.log(face.edge)  // 5
console.log(face.vertex) // 3