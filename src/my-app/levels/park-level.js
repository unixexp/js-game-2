import { Enemy } from "../components/enemy";
import { Level, Background, Layer } from "../components/level";
import { Player } from "../components/player";

export default class ParkLevel extends Level {

    constructor(app) {
        super(app);
        this.startPosition = 0;
        this.endPosition = 1000;
        this.backgrounds = [
            new Background(app, this, [
                new Layer(app, "sky", "assets/img/layers/day/sky.png", 0.1, false),
                new Layer(app, "clouds", "assets/img/layers/day/clouds.png", 0.15, true),
                new Layer(app, "landscape-far", "assets/img/layers/day/landscape-far.png", 0.25, false),
                new Layer(app, "andscape-middle", "assets/img/layers/day/landscape-middle.png", 0.5, false),
                new Layer(app, "front", "assets/img/layers/day/front.png", 0.5, false),
                new Layer(app, "trees", "assets/img/layers/day/trees.png", 0.5, false),
                new Layer(app, "ground", "assets/img/layers/day/ground.png", 1, false),
                new Layer(app, "light", "assets/img/layers/day/light.png", 1, false)
            ]),
            new Background(app, this, [
                new Layer(app, "sky", "assets/img/layers/night/sky.png", 0.1, false),
                new Layer(app, "clouds", "assets/img/layers/night/clouds.png", 0.15, true),
                new Layer(app, "landscape-far", "assets/img/layers/night/landscape-far.png", 0.25, false),
                new Layer(app, "andscape-middle", "assets/img/layers/night/landscape-middle.png", 0.5, false),
                new Layer(app, "front", "assets/img/layers/night/front.png", 0.5, false),
                new Layer(app, "trees", "assets/img/layers/night/trees.png", 0.5, false),
                new Layer(app, "ground", "assets/img/layers/night/ground.png", 1, false),
                new Layer(app, "light", "assets/img/layers/night/light.png", 1, false)
            ])
        ];
        this.fadeLength = 60;
        this.player = new Player(this.app, 150, 290, 230, 160);
        this.enemies = [
            new Enemy(this.app, 716, 290, 230, 160, "ground"),
            new Enemy(this.app, 10000, 290, 230, 160, "ground")
        ];
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