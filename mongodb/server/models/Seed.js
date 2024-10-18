const mongoose = require('mongoose');

// Reference User model (assuming you have a User model)
const userSchema = require('./User'); // Adjust the path to your User model

const seedSchema = new mongoose.Schema({
    seedName: {
        type: String,
        required: true,
    },
    seedType: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    createdBy: { // ObjectId to reference User
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true, // Make it required if every seed must have a creator
    },
    createdByEmail: { // Email of the user who created the seed
        type: String,
        required: true, // Make it required if every seed must have a creator's email
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Seed = mongoose.model('Seed', seedSchema);
module.exports = Seed;
