// Unweighted Graph

class AdjacencyMatrix {
  constructor() {
    this.matrix = [];
    this.vertexNames = [];
  }
  addVertex(vertex) {
    if (!this.hasVertex(vertex)) {
      this.vertexNames.push(vertex);
      const currentLength = this.matrix.length;
      for (let i = 0; i < currentLength; i++) {
        this.matrix[i].push(0);
      }
      this.matrix.push(new Array(currentLength+1).fill(0));
    }
  }
  addEdge(fromVertex, toVertex) {
    const fromIdx = this.vertexNames.indexOf(fromVertex);
    const toIdx = this.vertexNames.indexOf(toVertex);
    if (fromIdx !== -1 && toIdx !== -1) {
      this.matrix[fromIdx][toIdx] = 1;
    }
  }
  hasVertex(vertex) {
    return this.vertexNames.includes(vertex);
  }
  hasEdge(fromVertex, toVertex) {
    const fromIdx = this.vertexNames.indexOf(fromVertex);
    const toIdx = this.vertexNames.indexOf(toVertex);
    if (this.matrix[fromIdx][toIdx] === 1) {
      return true;
    } else {
      return false;
    }
  }
  removeEdge(fromVertex, toVertex) {
    const fromIdx = this.vertexNames.indexOf(fromVertex);
    const toIdx = this.vertexNames.indexOf(toVertex);
    if (fromIdx !== -1 && toIdx !== -1) {
      this.matrix[fromIdx][toIdx] = 0;
    }
  }
  // removeVertex(vertex)
}

class AdjacencyList {
  constructor() {
    this.list = {};
  }
  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }
  addEdge(fromVertex, toVertex) {
    if (this.hasVertex(fromVertex) && this.hasVertex(toVertex)) {
      if (!this.hasEdge(fromVertex, toVertex)) {
        this.list[fromVertex].push(toVertex);
      }
    }
  }
  hasVertex(vertex) {
    return (vertex in this.list);
  }
  hasEdge(fromVertex, toVertex) {
    if (!this.hasVertex(fromVertex)) return false;
    return this.list[fromVertex].includes(toVertex);
  }
  removeVertex(vertex) {
    if (this.hasVertex(vertex)) {
      delete this.list[vertex];
      for (let v in this.list) {
        this.list[v] = this.list[v].filter(el => el !== vertex);
      }
    }
  } 
  removeEdge(fromVertex, toVertex) {
    if (this.hasVertex(fromVertex) && this.hasVertex(toVertex)) {
      if (this.hasEdge(fromVertex, toVertex)) {
        const targetIdx = this.list[fromVertex].indexOf(toVertex);
        this.list[fromVertex].splice(targetIdx, 1);
      }
    }
  }
}
