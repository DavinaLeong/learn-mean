'use strict';
const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://DavinaLeong:EagleSoar12.ml@ds121311.mlab.com:21311/learn-mean-davina',
    ['tasks']);

/**
 * Retrieve all tasks.
 */
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;