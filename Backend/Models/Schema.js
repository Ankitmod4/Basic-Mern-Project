let mongoose = require('mongoose');

let create = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    } 
})
module.exports = mongoose.model("First", create);