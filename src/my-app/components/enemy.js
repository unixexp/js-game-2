import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export class Enemy extends Component {

    constructor(app, x, y, width, height, layerName) {
        super(app, x, y, width, height, layerName);
        this.spriteWidth = 230;
        this.spriteHeight = 160;
        this.startSrcX = 70;
        this.srcX = this.startSrcX;
        this.srcY = 0;
        this.imageIdle = null;
        this.layerName = layerName;
        this.layerIndx = 0; // Will set by level
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

        if (this.app.debug) {
            this.context.strokeRect(
                this.app.scaleByX(this.x),
                this.app.scaleByY(this.y),
                this.app.scaleByX(this.width),
                this.app.scaleByY(this.height)
                );
        }

        this.context.drawImage(
            this.imageIdle,
            this.srcX,
            this.srcY,
            this.spriteWidth,
            this.spriteHeight,
            this.app.scaleByX(this.x),
            this.app.scaleByY(this.y),
            this.app.scaleByX(this.width),
            this.app.scaleByY(this.height)
        );
    }

}