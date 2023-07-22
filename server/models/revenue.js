let mongoose = require("mongoose");

const Revenue = mongoose.model('Revenue', new mongoose.Schema({  
    id:  mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    date: Date
}))

module.exports = Revenue;