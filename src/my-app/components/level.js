import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export class Level extends Component {

    constructor(app, player) {
        super(app);
        this.startPosition = 0;
        this.currentPosition = 0;
        this.endPosition = 10000;
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

        if (this.player.isRunningForward) {
            if (this.currentPosition !== this.endPosition) {
                this.currentPosition++;

                this.backgrounds.forEach(background => {
                    background.runForward();
                    background.update(params);
                });
            }
        } else if (this.player.isRunningBackward) {
            if (this.currentPosition !== this.startPosition) {
                this.currentPosition--;

                this.backgrounds.forEach(background => {
                    background.runBackward();
                    background.update(params);
                });
            }
        }

        this.backgrounds.forEach(background => {
            background.movePermanentLayers();
            background.update(params);
        });

        this.player.update(params);
    }

    render(params) {
        super.render(params);

        this.backgrounds.forEach(background => {
            background.position = this.currentPosition;
            background.render(params);
        });

        this.player.render(params);
    }

}

export class Background extends Component {

    constructor(app, layers) {
        super(app);
        this.layers = layers;
        this.permanentLayers = this.layers.filter(layer => layer.permanent);
    }

    async init() {
        await super.init();

        for (const layer of this.layers) {
            await layer.init();
        }
    }

    update(params) {
        super.update(params);

        this.layers.forEach(layer => layer.update(params));
    }

    render(params) {
        super.update(params);

        this.layers.forEach(layer => layer.render(params));
    }

    movePermanentLayers() {
        
        this.permanentLayers.forEach(layer => {
            if (layer.x1 < -layer.width) {
                layer.x1 = layer.width + layer.x2;
            }
    
            if (layer.x2 < -layer.width) {
                layer.x2 = layer.width + layer.x1;
            }
    
            layer.x1-= layer.speed;
            layer.x2-= layer.speed;
        });
    }

    runForward() {
        this.layers.forEach(layer => {
            if (layer.x1 < -layer.width) {
                layer.x1 = layer.width + layer.x2;
            }
    
            if (layer.x2 < -layer.width) {
                layer.x2 = layer.width + layer.x1;
            }
    
            layer.x1-= layer.speed;
            layer.x2-= layer.speed;
        });
    }

    runBackward() {
        this.layers.forEach(layer => {
            if (layer.x1 > layer.width) {
                layer.x1 = layer.x2 - layer.width;
            }
    
            if (layer.x2 > layer.width) {
                layer.x2 = layer.x1 - layer.width;
            }
    
            layer.x1 += layer.speed;
            layer.x2 += layer.speed;
        });
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

        this.context.drawImage(
            this.image,
            this.app.scaleByX(this.x1),
            this.app.scaleByY(0),
            this.app.scaleByX(this.width),
            this.app.scaleByY(this.height)
            );

        this.context.drawImage(
            this.image,
            this.app.scaleByX(this.x2),
            this.app.scaleByY(0),
            this.app.scaleByX(this.width),
            this.app.scaleByY(this.height)
            );
    }

}