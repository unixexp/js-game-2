import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";
import {
    PLAYER_STATE_IDLE,
    PLAYER_STATE_RUN_FORWARD,
    PLAYER_STATE_ATTACK,
    PLAYER_STATE_DIE,
    PLAYER_STATE_RUN_BACKWARD
} from "./player";

export class Level extends Component {

    constructor(app, player) {
        super(app);
        this.position = 0;
        this.backgrounds = [];
        this.player = player;
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
        this.player.update(params);
        console.log(this.player.state);
    }

    render(params) {
        super.render(params);
        this.player.render(params);
    }

}

export class Background extends Component {

    constructor(app, layers) {
        super(app);
        this.layers = layers;
    }

    async init() {
        await super.init();

        for (const layer of this.layers) {
            await layer.init();
        }
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.update(params);
    }

}

export class Layer extends Component {

    constructor(app, imageURL, speed, permanent) {
        super(app);
        this.imageURL = imageURL;
        this.image = null;
        this.width = 0;
        this.height = 0;
        this.x1 = 0;
        this.x2 = 0;
        this.speed = speed;
        this.permanent = permanent;
    }

    async init() {
        await super.init();

        this.image = await loadImage(this.imageURL);
        this.width = this.image.width;
        this.height = this.image.height;
        this.x1 = 0;
        this.x2 = this.image.width;
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.render(params);
    }

}