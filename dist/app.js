"use strict";
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
    }
    App.prototype.routes = function () {
        this.express.use('./routes');
    };
    return App;
}());
module.exports = new App();
