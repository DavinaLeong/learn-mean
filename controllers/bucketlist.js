//require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const bucketlist = require('./../models/list');

//get http method to /bucketlist
router.get('/', (req, res) => {
    bucketlist.getAllLists((err, lists) => {
        if(err) {
            res.json({success: false, message: `Failed to load all lists. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, lists: lists}, null, 2));
            res.end();
        }
    });
});

//post http method to /bucketlist
router.post('/', (req, res, next) => {
    res.send("POST");
});

//delete http method to /bucketlist.
//here, we pass in a params whixh is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");
});

module.exports = router;