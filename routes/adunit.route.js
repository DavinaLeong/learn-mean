'use strict';
const express = require('express');
const app = express();
const Router = express.Router();

const adunitModel = require('./../models/adunit-model');

//create
Router.route('/add').post((req, res) => {
    const adunit = new adunitModel(req.body);
    adunit.save()
        .then(game => {
            res.status(200).json({
                'adunit': 'AdUnit saved.'
            });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//retrieve
Router.route('/').get((req, res) => {
    adunitModel.find((err, adunits) => {
        if(err) {
            console.log(err);
        } else {
            res.json(adunits);
        }
    });
});

//edit
Router.route('/edit/:id').get((req, res) => {
    adunitModel.findById(req.params.id, (err, adunit) => {
        res.json(adunit);
    });
});

//update
Router.route('/update/:id').post((req, res) => {
    adunitModel.findById(req.params.id, (err, adunit) => {
        if(adunit) {
            return next(new Error('AdUnit not found.'));
        } else {
            adunit = {
                unitName: req.body.unitName,
                unitPrice: req.body.unitPrice
            };

            adunitModel.save()
                .then(updatedAdunit => {
                    if(updatedAdunit) {
                        res.json('AdUnit updated.');
                    } else {
                        res.json('Failed to update AdUnit.');
                    }
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});

//delete
Router.route('/delete/:id').get((req, res) => {
    adunit.findByIdAndRemove(
        { _id: req.params.id },
        (err, adunit) => {
            if(err) {
                res.json(err);
            } else {
                if(adunit) {
                    res.json('Adunit deleted.');
                } else {
                    res.json('Failed to delete AdUnit.');
                }
            }
        }
    );
});

module.exports = Router;