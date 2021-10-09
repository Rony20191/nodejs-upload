"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('./app').Router;
router.get('/user', function (req, res) {
    return res.status(200).json({ message: 'Created user' });
});
