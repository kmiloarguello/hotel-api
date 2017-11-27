const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    stars:Number,
    image:String,
    price:String
});

module.exports = mongoose.model('HotelSchema', HotelSchema);