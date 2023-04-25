import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export class Level extends Component {

    constructor(app) {
        super(app);
        this.backgrounds = [];
        this.player = null;
        this.enemies = [];
        this.artifacts = [];
    }

    async init() {
        await super.init();

        for (const background of this.backgrounds) {
            await background.init();
        }
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.render(params);
    }

}

export class Background {

    constructor(layers) {
        this.layers = layers;
        this.error = null;
    }

    async init() {
        for (const layer of this.layers) {
            await layer.init();
        }
    }

}

export class Layer {

    constructor(imageURL, speed, permanent) {
        this.imageURL = imageURL;
        this.image = null;
        this.width = 0;
        this.height = 0;
        this.x1 = 0;
        this.x2 = 0;
        this.timeToUpdate = 0;
        this.speed = speed;
        this.permanent = permanent;
    }

    async init() {
        this.image = await loadImage(this.imageURL);
        this.width = this.image.width;
        this.height = this.image.height;
        this.x1 = 0;
        this.x2 = this.image.width;
    }

}
