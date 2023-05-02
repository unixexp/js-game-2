import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export const ENEMY_STATE_IDLE = 1;
export const ENEMY_STATE_RUN = 2;
export const ENEMY_STATE_ATTACK = 3;
export const ENEMY_STATE_DIE = 4;

export class Enemy extends Component {

    constructor(app, x, y, width, height, layerName) {
        super(app, x, y, width, height, layerName);
        this.spriteWidth = 0;
        this.spriteHeight = 0;
        this.startSrcX = 0;
        this.srcX = this.startSrcX;
        this.srcY = 0;
        this.layerName = layerName;
        // Will set by level
        this.layer = null;
        // Distance between enemy and oponent
        // when enemy will start run
        this.visibility = 0;
        this.health = 100;
        this.strength = 5;
        this.speed = 1;
        this.currentSpeed = 0;
        // Resorces
        this.imageIdleURL = null;
        this.imageIdle = null;
        // State
        this.state = ENEMY_STATE_IDLE;
        this.isAttacking = false;
        this.isRunning = false;
        this.isIdle = true;
        this.isDying = false;
        this.died = false;
    }

    async init() {
        await super.init();
    }

    update(params) {
        super.update(params);
        this.x = this.x + this.layer.currentSpeed - this.currentSpeed;
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
        if (!this.died && this.x < component.x + component.width - this.startSrcX && this.x > component.x) {
            return true;
        } else {
            return false;
        }
    }

    checkVisibility(component) {
        const distance = this.x - (component.x + component.width);
        if (distance <= this.visibility && !this.checkCollision(component)) {
            return true;
        } else {
            return false;
        }
    }

}