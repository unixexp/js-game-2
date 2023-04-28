import { loadImage } from "../../engine/utils/files";
import { Enemy } from "../components/enemy";

export class DragonEnemy extends Enemy {

    constructor(app, x, y, width, height, layerName) {
        super(app, x, y, width, height, layerName);
        this.spriteWidth = 230;
        this.spriteHeight = 160;
        this.startSrcX = 70;
        this.visibility = 900;
    }

    async init() {
        await super.init();
        this.imageIdle = await loadImage("assets/img/characters/dragon-enemy-idle.png");
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.render(params);
    }

}