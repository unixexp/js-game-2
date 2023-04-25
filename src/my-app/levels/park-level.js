import { Background, Layer, Level } from "./level";

export default class ParkLevel extends Level {

    constructor(app) {
        super(app);
        this.backgrounds = [
            new Background([
                new Layer("assets/img/layers/night/sky.png", 0.1, false),
                new Layer("assets/img/layers/night/clouds.png", 0.15, true),
                new Layer("assets/img/layers/night/landscape-far.png", 0.25, false),
                new Layer("assets/img/layers/night/landscape-middle.png", 0.5, false),
                new Layer("assets/img/layers/night/front.png", 0.5, false),
                new Layer("assets/img/layers/night/trees.png", 0.5, false),
                new Layer("assets/img/layers/night/ground.png", 2, false),
                new Layer("assets/img/layers/night/light.png", 2, false)
            ])
        ]
    }

    async init() {
        await super.init();
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.render(params);
    }

}