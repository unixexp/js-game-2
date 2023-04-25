import Component from "../../engine/components/component";
import { Player } from "../components/player";
import ErrorScreen from "./error-screen";
import ParkLevel from "../levels/park-level";

export default class GameScreen extends Component {

    constructor(app, x, y, width, height) {
        super(app, x, y, width, height);
        this.levels = [ParkLevel]
        this.player = null;
        this.level = null;
    }

    async init() {
        await super.init();

        try {
            this.player = new Player(this.app, 50, 290, 230, 160);
            await this.player.init();

            this.level = new this.levels[0](this.app, this.player);
            await this.level.init();
        } catch(err) {
            console.log(err);
            this.app.setComponent(new ErrorScreen(this.app, err));
        }
    }

    update(params) {
        super.update(params);

        if (params.keys.findIndex(k => k === "ArrowLeft") !== -1) {
            this.player.runBackward();
        } else if (params.keys.findIndex(k => k === "ArrowRight") !== -1) {
            this.player.runForward();
        } else if (params.keys.findIndex(k => k === " ") !== -1) {
            this.player.attack();
        }  else {
            this.player.idle();
        }

        this.level.update(params);
    }

    render(params) {
        super.render(params);
        this.level.render(params);
    }

}