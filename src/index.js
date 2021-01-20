import Stage from "@/UI/Base/Stage"
import MainMenu from "@/UI/MainMenu"

// 初始化PIXI
const app = new PIXI.Application()
document.body.appendChild(app.view)
// 为了方便调用，app设置为全局变量
window.app = app

// 游戏对象是管理游戏舞台的
const stage = new Stage()
// 为了方便调用，stage设置为全局变量
window.stage = stage

// 进入主菜单
stage.push(new MainMenu())