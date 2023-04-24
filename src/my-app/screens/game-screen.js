import Component from "../../engine/components/component";
import ErrorScreen from "./error-screen";
import { loadImage } from "../../engine/utils/files";

export default class GameScreen extends Component {

    constructor(app) {
        super(app);
        this.images = [];
        this.fps = 15;
        this.timeToAnimate = 0;
        this.frame = 0;
    }

    async init() {
        super.init();

        try {
            for (let i = 1; i <= 60; i++) {
                const image = await loadImage(`assets/img/intro/${i}.jpg`);
                this.images.push(image);
            }
        } catch (err) {
            this.app.setComponent(new ErrorScreen(this.app, this.canvas, err));
            return false;
        }

        return true;
    }

    update(params) {
        super.update(params);

        this.timeToAnimate += params.deltaTime;
        if (this.timeToAnimate >= 1000 / this.fps) {
            if (this.frame < this.images.length-1) {
                this.frame++;
            } else {
                return
            }

            this.timeToAnimate = 0;
        }
    }

    render(params) {
        super.render(params);
        
        this.context.drawImage(
            this.images[this.frame],
            0,
            0,
            this.app.scaleByX(this.app.worldWidth),
            this.app.scaleByY(this.app.worldHeight)
            );
        
        /*
        this.context.fillStyle = mouseLegend.color;
        this.context.font = `${this.app.scaleByMinAxis(48)}px NineteenNinetySeven`;
        this.context.fillText(
            `${mouseLegend.x}, ${mouseLegend.y}`,
            this.app.scaleByX(mouseLegend.xPos),
            this.app.scaleByY(mouseLegend.yPos)
        );
        */

    }

}