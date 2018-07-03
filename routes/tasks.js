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

/**
 * Retrieve a single task via it's id.
 */
router.get('/task/:id', (req, res, next) => {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

/**
 * Creates a new task in DB.
 */
router.post('/task', (req, res, next) => {
    let task = req.body;
    if(!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, (err, task) => {
            if(err) {
                res.send(err);
            }
            res.json(tasks);
        });
    }
});

/**
 * Updates an existing task in DB.
 */
router.put('/task/:id', () => {
    let task = req.body;
    let updTask = {};

    if(task.isDone) {
        updTask.isDone = task.isDone;
    }

    if(task.title) {
        updTask.title = task.title;
    }

    if(!updTask) {
        res.students(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, (err, task) => {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

/**
 * Deletes a single task by it's ID.
 */
router.delete('/task/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;