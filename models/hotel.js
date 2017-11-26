const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    stars:Number,
    price:String
});

module.exports = mongoose.model('HotelSchema', HotelSchema);