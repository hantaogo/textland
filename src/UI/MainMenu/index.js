import { newUI } from '@/UI/utils'

const MainMenu = class MainMenu extends PIXI.Container {
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
    // Mods库
    app.loader.add('mods', 'assets/mods.png').load((loader, resources) => {
      const btn = new PIXI.Sprite(resources.mods.texture);
      btn.x = app.renderer.width / 2;
      btn.y = app.renderer.height / 2;
      btn.anchor.x = 0.5;
      btn.anchor.y = 0.5;
      btn.interactive = true
      btn.on('click', () => {
        game.push(newUI('ModMgr'));
      })
      this.addChild(btn);
    })
  }

  onExit() {
  }
}

export default MainMenu