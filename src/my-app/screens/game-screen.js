import Component from "../../engine/components/component";
import ErrorScreen from "./error-screen";
import ParkLevel from "../levels/park-level";

export default class GameScreen extends Component {

    constructor(app, x, y, width, height) {
        super(app, x, y, width, height);
        this.levels = [ParkLevel]
        this.level = null;
    }

    async init() {
        await super.init();

        
            this.level = new this.levels[0](this.app);
            await this.level.init();
        
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