const mongoose = require('mongoose');

const CropPriceSchema = new mongoose.Schema({
    predictedCrop: { type: String, required: true },
    predictedPrice: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Price', CropPriceSchema);