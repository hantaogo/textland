let MainMenu = class MainMenu {
  constructor() {
    this.name = 'MainMenu';
  }

  onEnter() {
    // 主标题
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
    const textTitle = new PIXI.Text('Text Land', style);
    textTitle.anchor.x = 0.5;
    textTitle.x = app.renderer.width / 2;
    textTitle.y = 120;
    app.stage.addChild(textTitle);
    // 图片
    app.loader.add('bunny', 'assets/CBA25.PNG').load((loader, resources) => {
      const bunny = new PIXI.Sprite(resources.bunny.texture);
      bunny.x = app.renderer.width / 2;
      bunny.y = app.renderer.height / 2;
      bunny.anchor.x = 0;
      bunny.anchor.y = 0;
      app.stage.addChild(bunny);
      app.ticker.add(() => {
        bunny.rotation += 0.01;
      });
    });
  }

  onExit() {

  }
}

export default MainMenu