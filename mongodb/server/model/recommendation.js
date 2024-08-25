const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
    farm_id: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
        required: true
    },
    recommendation_type: {
        type: String,
        required: true
    },
    recommendation_details: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
