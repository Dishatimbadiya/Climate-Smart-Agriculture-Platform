const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    crop_type: {
        type: String,
        required: true
    },
    planting_schedule: {
        type: Date,
        required: true
    },
    soil_type: {
        type: String,
        required: true
    },
    irrigation_system: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Farm', FarmSchema);