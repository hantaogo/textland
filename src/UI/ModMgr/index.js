import { resources } from "pixi.js";

const ModMgr = class ModMgr extends PIXI.Container {
  constructor() {
    super();
    this.name = 'ModMgr';
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
    const title = new PIXI.Text('Mods', style);
    title.anchor.x = 0.5;
    title.x = app.renderer.width / 2;
    title.y = 120;
    this.addChild(title);
    // 返回
    app.loader.add('back', 'assets/back.png').load((loader, resources) => {
      const btn = new PIXI.Sprite(resources.mods.texture);
      btn.x = app.renderer.width / 2;
      btn.y = app.renderer.height / 2;
      btn.anchor.x = 0.5;
      btn.anchor.y = 0.5;
      btn.interactive = true
      btn.addListener('click', () => {
        game.pop()
      })
      this.addChild(btn);
    })
  }

  onExit() {
  }
}

export default ModMgr