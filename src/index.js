'use strict';

import "./assets/scss/index.scss";
import App from "./engine/components/app"
import IntroScreen from "./my-app/screens/intro-screen";

const app = new App("main-canvas", 800, 500, (app) => {
    app.setComponent(new IntroScreen(app));
});
