const mongoose = require('mongoose');
const validator = require('validator');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    bedrooms: Number,
    bathrooms: Number,
    rating: Number,
    createdAt: Date,
    updatedAt: Date,
    email:{
        type: String,
        required: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    }
});

hotelSchema.pre('save', function(next){
    this.updatedAt = Date.now();
    if(!this.createdAt){
        this.createdAt = this.updatedAt;
    }
    next();
});

module.exports = mongoose.model('airbnbs', hotelSchema);