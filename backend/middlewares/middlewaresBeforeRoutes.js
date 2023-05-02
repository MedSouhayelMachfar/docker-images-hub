const logger = require('./logger');
const express = require('express');
const helmet = require('helmet');

module.exports = (app) => {
    
    // Set security HTTP headers
    app.use(helmet());
    // Body parser, reading data from body into req.body
    app.use(express.json());
    app.use(
    express.urlencoded({
        extended: true,
    })
    );
    // Serving static files
    app.use(express.static(__dirname + "../public"));
    // Development logging
    if (process.env.NODE_ENV === "development") {
        app.use(logger);
    }
}