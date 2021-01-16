const Game = class Game {
  constructor() {
    this.nodes = []
  }

  push(node) {
    app.stage.addChild(node)
    if (this.nodes.length > 0) {
      this.nodes[this.nodes.length - 1].visible = false
    }
    this.nodes.push(node)
    node.onEnter()
  }

  pop() {
    const node = this.nodes.pop()
    node.onExit()
    app.stage.removeChild(node)
    if (this.nodes.length > 0) {
      this.nodes[this.nodes.length - 1].visible = true
    }
  }

  remove(node) {
    const index = this.nodes.indexOf(node)
    if (index !== -1) {
      node.onExit()
      this.nodes.splice(index, 1)
      app.stage.removeChild(node)
    }
  }

  clear() {
    for (let t in this.nodes) {
      t.onExit()
    }
    app.stage.removeChildren()
    this.nodes.clear()
  }
}

export default Game