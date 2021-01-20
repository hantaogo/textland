import { newUI } from '@/UI/utils'
import Button from '../Base/Button'

export default class MainMenu extends PIXI.Container {
  constructor() {
    super();
    this.name = 'MainMenu';
  }

  onEnter() {
    // 标题
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    });
    const title = new PIXI.Text('Textland', style);
    title.anchor.x = 0.5;
    title.x = app.renderer.width / 2;
    title.y = 120;
    this.addChild(title);
    
    // 加载资源
    app.loader
    .add('assets/normal.png')
    .add('assets/down.png')
    .add('assets/over.png')
    .load((loader, resources) => this._assetsLoaded(loader, resources))
  }

  _assetsLoaded(loader, resources) {
    const btn = new Button({
      normalTexture: resources['assets/normal.png'].texture, 
      downTexture: resources['assets/down.png'].texture,
      overTexture: resources['assets/over.png'].texture,
      textString: '你好',
      textStyle: {
        fontSize: 24
      }
    })
    btn.x = app.renderer.width / 2
    btn.y = app.renderer.height / 2
    btn.on('click', () => {
      console.log('点击')
    })
    this.addChild(btn)
  }

  onExit() {
  }
}
