// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\models\CropPredict.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cropPredictSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
    N: { type: Number, required: true },
    P: { type: Number, required: true },
    K: { type: Number, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    ph: { type: Number, required: true },
    rainfall: { type: Number, required: true },
    predictedCrop: { type: String, required: true },
    predictedPrice: { type: Number, required: true },
    predictionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CropPredict', cropPredictSchema);
