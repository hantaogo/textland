export default class Button extends PIXI.Container {
  constructor({ normalTexture, downTexture, overTexture, textString, textStyle }) {
    super()
    // 贴图
    this.texture = {}
    this.texture['normal'] = normalTexture || null
    this.texture['down'] = downTexture || null
    this.texture['over'] = overTexture || null
    this.state = 'normal'
    // 精灵
    this.sprite = new PIXI.Sprite()
    this.sprite.anchor.x = 0.5
    this.sprite.anchor.y = 0.5
    this.sprite.interactive = true
    this.sprite.texture = this.texture['normal']
    this.addChild(this.sprite)
    // 监听鼠标事件
    this.sprite.on('click', evt => this._onClick(evt))
    this.sprite.on('mousedown', evt => this._onMousedown(evt))
    this.sprite.on('mouseup', evt => this._onMouseup(evt))
    this.sprite.on('mouseover', evt => this._onMouseover(evt))
    this.sprite.on('mouseout', evt => this._onMouseout(evt))
    this.sprite.on('mouseupoutside', evt => this._onMouseupoutside(evt))
    // 文本
    this.textString = textString || ''
    const ts = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      // fontStyle: 'italic',
      fontWeight: 'bold',
      fill: '#ffff00', // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    })
    const mergedTs = Object.assign(ts, textStyle)
    const text = new PIXI.Text(this.textString, mergedTs)
    text.anchor.x = 0.5
    text.anchor.y = 0.5
    text.x = 0
    text.y = 0
    this.text = text
    this.addChild(text)
  }
  _onClick(evt) {
    this.emit('click', evt)
  }
  _onMousedown() {
    this.state = 'down'
    this.down = true
    this.sprite.texture = this.texture[this.state] || this.texture['normal']
  }
  _onMouseup() {
    this.state = 'over'
    this.down = false
    this.sprite.texture = this.texture[this.state] || this.texture['normal']
  }
  _onMouseover() {
    this.state = 'over'
    if (!this.down) {
      this.sprite.texture = this.texture[this.state] || this.texture['normal']
    }
  }
  _onMouseout() {
    if (!this.down) {
      this.state = 'normal'
      this.down = false
      this.sprite.texture = this.texture[this.state]
    }
  }
  _onMouseupoutside() {
    this.state = 'normal'
    this.down = false
    this.sprite.texture = this.texture[this.state]
  }
}
