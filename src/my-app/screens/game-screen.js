import Component from "../../engine/components/component";
import ErrorScreen from "./error-screen";
import ParkLevel from "../levels/park-level";

export default class GameScreen extends Component {

    constructor(app) {
        super(app);
        this.levels = [ParkLevel]
        this.level = null;
    }

    async init() {
        super.init();

        try {
            this.level = new this.levels[0](this.app);
            await this.level.init();
        } catch (err) {
            this.app.setComponent(new ErrorScreen(this.app, err));
            return false;
        }

        return true;
    }

    update(params) {
        super.update(params);
        this.level.update(params);
    }

    render(params) {
        super.render(params);
        this.level.render(params);
    }

}