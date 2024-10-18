// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\models\Request.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
    requestId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), // Automatically generate a new ObjectId
    },
    requesterId: {
        type: String, // Assuming it's a string like an email or user ID
        required: true,
    },
    requesterEmail: {
        type: String,
        required: true,
    },
    seedId: {
        type: Schema.Types.ObjectId,
        ref: 'Seed',
        required: true,
    },
    seedOwnerEmail: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'granted', 'declined'],
        default: 'pending',
    },
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
