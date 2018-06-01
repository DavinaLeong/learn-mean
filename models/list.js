//require mongoose package
const mongoose = require('mongoose');

//define BucketlistSchema with title, description and category.
const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const Bucketlist = module.exports = moongoose.model('Bucketlist', BucketlistSchema);

module.exports.getAllLists = (callback) => {
    Bucketlist.find(callback);  
};