const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    preferences: {
        notificationFrequency: { type: String, default: 'daily' },
        preferredUnits: { type: String, default: 'metric' }
    }
});

module.exports = mongoose.model('User', userSchema);
