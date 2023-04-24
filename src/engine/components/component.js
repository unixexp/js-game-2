export default class Component {

    constructor(app) {
        this.id = Math.floor(Math.random() * 1000);
        this.app = app;
        this.canvas = app.canvas;
        this.context = this.canvas.getContext("2d");
    }

    async init() {
        return true;
    }

    clear() {
        this.context.clearRect(
            0,
            0,
            this.app.scaleByX(this.app.worldWidth),
            this.app.scaleByY(this.app.worldWidth)
        );
    }

    update(params) {
        // Implement this method in extended custom components
        // Do not forget call super.update(params); first

        // All game logic should be implemented in virtual world
        // coordinate system. Application props: worldWidth, worldHeight, worldMouseX etc..
    }

    render(params) {
        // Implement this method in extended custom components
        // Do not forget call super.render(params); first

        // To correct rendering world coordinate system to
        // canvas, please use application methods scaleByX(worldMouseX),
        // scaleByY(someObjectYPosition)
    }

}