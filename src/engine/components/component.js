export default class Component {

    constructor(app) {
        this.id = Math.floor(Math.random() * 1000);
        this.app = app;
        this.canvas = app.canvas;
        this.context = this.canvas.getContext("2d");
    }

    async init() {
        // Implement this method in extended custom components
        // Do not forget call super.update(params); first
        const fontSize = 48;

        const w = this.app.scaleByX(this.app.worldWidth);
        const h = this.app.scaleByY(this.app.worldHeight);

        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, w, h);
        this.context.font = `${this.app.scaleByMinAxis(fontSize)}px NineteenNinetySeven`;
        this.context.fillStyle = "lightGreen";
        const text = "Loading...";
        const textMetrics = this.context.measureText(text);
        const textWidth = textMetrics.width;
        const x = w / 2 - textWidth / 2;
        const y = h / 2;
        this.context.fillText(text, x, y);

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