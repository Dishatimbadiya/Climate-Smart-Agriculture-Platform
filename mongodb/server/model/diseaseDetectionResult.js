const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiseaseDetectionResultsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    confidence: {
        type: Number,
        required: true
    },
    detected_disease: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DiseaseDetectionResults', DiseaseDetectionResultsSchema);
