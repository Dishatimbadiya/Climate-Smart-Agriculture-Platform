const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    farm_id: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
        required: true
    },
    alert_type: {
        type: String,
        enum: ['Weather', 'Disease'],
        required: true
    },
    alert_message: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    is_read: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Alert', alertSchema);
