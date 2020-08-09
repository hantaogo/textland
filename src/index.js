import Game from "@/Core/Game";
import MainMenu from "@/UI/MainMenu";
import { weathers, names } from '@/Util';

const app = new PIXI.Application();
document.body.appendChild(app.view);
window.app = app;
const game = new Game();
window.game = game;
game.push(new MainMenu());
console.log(weathers);