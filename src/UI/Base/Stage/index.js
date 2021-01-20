export default class Stage {
  
  constructor() {
    this.nodes = []
  }

  async push(node) {
    // 隐藏当前层
    if (this.nodes.length > 0) {
      this.nodes[this.nodes.length - 1].visible = false
    }
    app.stage.addChild(node)
    try {
      await node.onEnter()
    } catch (error) {
      console.warn(error)
    } finally {
      this.nodes.push(node)
    }
  }

  async pop() {
    const node = this.nodes[this.nodes.length - 1]
    try {
      await node.onExit() 
    } catch (error) {
      console.warn(error)
    } finally {
      app.stage.removeChild(node)
      this.nodes.pop()
      // 显示当前层
      if (this.nodes.length > 0) {
        this.nodes[this.nodes.length - 1].visible = true
      }
    }
  }

  async remove(node) {
    const index = this.nodes.indexOf(node)
    if (index !== -1) {
      await node.onExit()
      this.nodes.splice(index, 1)
      app.stage.removeChild(node)
    }
  }

  async clear() {
    for (let t in this.nodes) {
      await t.onExit()
    }
    app.stage.removeChildren()
    this.nodes.clear()
  }

  getByName(name) {
    return this.nodes.find(t => t.name === name)
  }
}