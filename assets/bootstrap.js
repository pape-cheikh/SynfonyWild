//#import { startStimulusApp } from "@symfony/stimulus-bundle";
// assets/bootstrap.js
// Autres importations nécessaires

//#const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

// Initialiser Stimulus
const application = Application.start();

// Charger les contrôleurs Stimulus
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
