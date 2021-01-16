import ModMgr from '@/UI/ModMgr'

const uiList = {
  ModMgr
}

const newUI = function(name) {
    return new uiList[name]
}

const baseAssets = {
  mods: 'assets/mods.png',
  back: 'assets/back.png'
}

const loadBaseAssets = function() {
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

export {
  newUI,
  loadBaseAssets
}