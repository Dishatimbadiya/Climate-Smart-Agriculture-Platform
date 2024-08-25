const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherDataSchema = new Schema({
    farm_id: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    wind_speed: {
        type: Number,
        required: true
    },
    precipitation: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('WeatherData', WeatherDataSchema);
