import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export class Enemy extends Component {

    constructor(app, x, y, width, height, layerName) {
        super(app, x, y, width, height, layerName);
        this.spriteWidth = 230;
        this.spriteHeight = 160;
        this.startSrcX = 70;
        this.srcX = this.startSrcX;
        this.srcY = 0;
        this.imageIdle = null;
        this.layerName = layerName;
        // Will set by level
        this.layer = null;
        // Distance between enemy and oponent
        // when enemy will start run
        this.visibility = 0;
        this.isAttacking = false;
        this.speed = 1;
        this.currentSpeed = 0;
    }

    async init() {
        await super.init();
    }

    update(params) {
        super.update(params);
        this.x = this.x + this.layer.currentSpeed;
        console.log(`${this.x} <> ${this.layer.position}`);
    }

    render(params) {
        super.render(params);

        if (this.app.debug) {
            this.context.strokeRect(
                this.app.scaleByX(this.x),
                this.app.scaleByY(this.y),
                this.app.scaleByX(this.width),
                this.app.scaleByY(this.height)
                );
        }

        this.context.drawImage(
            this.imageIdle,
            this.srcX,
            this.srcY,
            this.spriteWidth,
            this.spriteHeight,
            this.app.scaleByX(this.x),
            this.app.scaleByY(this.y),
            this.app.scaleByX(this.width),
            this.app.scaleByY(this.height)
        );
    }

    idle() {
        this.isRunning = false;
        this.isAttacking = false;
        this.isIdle = true;
        this.currentSpeed = 0;
        console.log(`Enemy #${this.id} idle`);
    }

    run() {
        this.isRunning = true;
        this.isAttacking = false;
        this.isIdle = false;
        this.currentSpeed = this.speed;
        console.log(`Enemy #${this.id} start run`);
    }

    attack() {
        this.isRunning = false;
        this.isAttacking = true;
        this.isIdle = false;
        this.currentSpeed = 0;
        console.log(`Enemy #${this.id} start attack`);
    }

    checkCollision(component) {
        if (this.x < component.x + component.width - this.startSrcX && this.x > component.x) {
            return true;
        } else {
            return false;
        }
    }

    checkVisibility(component) {
        const distance = component.x + component.width - this.startSrcX + this.x;
        console.log(`Distance: ${distance}`);
        if (distance <= this.visibility && !this.checkCollision(component)) {
            return true;
        } else {
            return false;
        }
    }

}