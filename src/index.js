import Game from "@/Core/Game"
import MainMenu from "@/UI/MainMenu"

// 初始化PIXI
const app = new PIXI.Application()
document.body.appendChild(app.view)
// 为了方便调用，app设置为全局变量
window.app = app

// 游戏对象是管理游戏舞台的
const game = new Game()
// 为了方便调用，app设置为全局变量
window.game = game

// 进入主菜单
game.push(new MainMenu())