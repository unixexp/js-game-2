import { Level, Background, Layer } from "../components/level";

export default class ParkLevel extends Level {

    constructor(app, player) {
        super(app, player);
        this.backgrounds = [
            new Background(app, [
                new Layer(app, "assets/img/layers/night/sky.png", 0.1, false),
                new Layer(app, "assets/img/layers/night/clouds.png", 0.15, true),
                new Layer(app, "assets/img/layers/night/landscape-far.png", 0.25, false),
                new Layer(app, "assets/img/layers/night/landscape-middle.png", 0.5, false),
                new Layer(app, "assets/img/layers/night/front.png", 0.5, false),
                new Layer(app, "assets/img/layers/night/trees.png", 0.5, false),
                new Layer(app, "assets/img/layers/night/ground.png", 2, false),
                new Layer(app, "assets/img/layers/night/light.png", 2, false)
            ]),
            new Background(app, [
                new Layer(app, "assets/img/layers/day/sky.png", 0.1, false),
                new Layer(app, "assets/img/layers/day/clouds.png", 0.15, true),
                new Layer(app, "assets/img/layers/day/landscape-far.png", 0.25, false),
                new Layer(app, "assets/img/layers/day/landscape-middle.png", 0.5, false),
                new Layer(app, "assets/img/layers/day/front.png", 0.5, false),
                new Layer(app, "assets/img/layers/day/trees.png", 0.5, false),
                new Layer(app, "assets/img/layers/day/ground.png", 2, false),
                new Layer(app, "assets/img/layers/day/light.png", 2, false)
            ])
        ],
        this.fadeLength = 30;
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