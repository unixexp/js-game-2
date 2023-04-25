import Component from "../../engine/components/component";
import { loadImage } from "../../engine/utils/files";

export const PLAYER_STATE_IDLE = 1;
export const PLAYER_STATE_RUN_FORWARD = 2;
export const PLAYER_STATE_RUN_BACKWARD = 3;
export const PLAYER_STATE_ATTACK = 4;
export const PLAYER_STATE_DIE = 5;

export class Player extends Component {

    constructor(app, x, y, width, height) {
        super(app, x, y, width, height);
        this.groundHeight = 50;
        this.spriteWidth = 230;
        this.spriteHeight = 160;
        this.state = PLAYER_STATE_IDLE;
        this.imageIdle = null;
        this.imageRunForward = null;
        this.imageJump = null;
        this.imageAttack = null;
        this.startSrcX = 0;
        this.stepSrcX = 300;
        this.srcX = this.startSrcX;
        this.srcY = 0;
        this.frame = 0;
        this.frames = 0;
        this.isJumping = false;
        this.isAttacking = false;
        this.isRunningForward = false;
        this.isRunningBackward = false;
        this.isDying = false;
        this.lastLineFrame = 0;
        this.lastFrame = 0;
        this.timeToAnimate = 0;
        this.animateInterval = 50;
        this.health = 100;
        this.died = false;
    }

    async init() {
        await super.init();

        this.imageIdle = await loadImage("assets/img/characters/player-idle.png");
        this.imageRunForward = await loadImage("assets/img/characters/player-run-forward.png");
        this.imageRunBackward = await loadImage("assets/img/characters/player-run-backward.png");
        this.imageAttack = await loadImage("assets/img/characters/player-attack.png");
        this.imageDie = await loadImage("assets/img/characters/player-die.png");
    }

    update(params) {
        super.update(params);
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

        if (this.state == PLAYER_STATE_IDLE) {
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
        } else if (this.state == PLAYER_STATE_RUN_FORWARD) {
            this.context.drawImage(
                this.imageRunForward,
                this.srcX,
                this.srcY,
                this.spriteWidth,
                this.spriteHeight,
                this.app.scaleByX(this.x),
                this.app.scaleByY(this.y),
                this.app.scaleByX(this.width),
                this.app.scaleByY(this.height)
            );
        } else if (this.state == PLAYER_STATE_RUN_BACKWARD) {
            this.context.drawImage(
                this.imageRunBackward,
                this.srcX,
                this.srcY,
                this.spriteWidth,
                this.spriteHeight,
                this.app.scaleByX(this.x),
                this.app.scaleByY(this.y),
                this.app.scaleByX(this.width),
                this.app.scaleByY(this.height)
            );
        } else if (this.state == PLAYER_STATE_ATTACK) {
            this.context.drawImage(
                this.imageAttack,
                this.srcX,
                this.srcY,
                this.spriteWidth,
                this.spriteHeight,
                this.app.scaleByX(this.x),
                this.app.scaleByY(this.y),
                this.app.scaleByX(this.width),
                this.app.scaleByY(this.height)
            );
        } else if (this.state == PLAYER_STATE_DIE) {
            this.context.drawImage(
                this.imageDie,
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
    }

    idle() {
        if (this.state !== PLAYER_STATE_IDLE && !this.died && !this.isJumping && !this.isAttacking) {
            this.frame = 0;
            this.frames = 0;
            this.srcX = this.startSrcX;
            this.srcY = 0;
            this.frames = 0;
            this.state = PLAYER_STATE_IDLE;
            this.isRunningForward = false;
            this.isRunningBackward = false;
        }
    }

    runForward() {
        if (this.state !== PLAYER_STATE_RUN_FORWARD && !this.died && !this.isJumping && !this.isAttacking) {
            if (!this.isJumping) {
                this.frame = 0;
                this.frames = 0;
                this.srcX = this.startSrcX;
                this.srcY = 0;
                this.frames = 0;
                this.state = PLAYER_STATE_RUN_FORWARD;
            }
            this.isRunningForward = true;
            this.isRunningBackward = false;
        }
    }

    runBackward() {
        if (this.state !== PLAYER_STATE_RUN_BACKWARD && !this.died && !this.isJumping) {
            if (!this.isJumping) {
                this.frame = 0;
                this.frames = 0;
                this.srcX = this.startSrcX;
                this.srcY = 0;
                this.frames = 0;
                this.state = PLAYER_STATE_RUN_BACKWARD;
            }
            this.isRunningBackward = true;
            this.isRunningForward = false;
        }
    }

    attack() {
        if (this.state !== PLAYER_STATE_ATTACK && !this.died && !this.isJumping && !this.isAttacking) {
            this.frame = 0;
            this.frames = 0;
            this.srcX = this.startSrcX;
            this.srcY = 0;
            this.frames = 0;
            this.state = PLAYER_STATE_ATTACK;
            this.isAttacking = true;
        }
    }

    die() {
        if (this.state !== PLAYER_STATE_DIE && !this.died) {
            this.frame = 0;
            this.frames = 0;
            this.srcX = this.startSrcX;
            this.srcY = 0;
            this.frames = 0;
            this.state = PLAYER_STATE_DIE;
            this.isDying = true;
            this.isAttacking = false;
            this.isRunningForward = false;
            this.isRunningBackward = false;
            this.isJumping = false;
        }
    }

}