let Game = class Game {
  constructor() {
    this.nodes = []
  }

  push(node) {
    node.onEnter()
    this.nodes.push(node)
  }

  pop() {
    let node = this.nodes.pop()
    node.onExit()
  }

  remove(node) {
    let index = this.nodes.indexOf(node)
    if (index !== -1) {
      node.onExit()
      this.nodes.splice(index, 1)
    }
  }

  clear() {
    for (let t in this.nodes) {
      t.onExit()
    }
    this.nodes.clear()
  }
}

export default Game