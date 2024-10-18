// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\models\Purchase.js
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    seedName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    buyerName: {
        type: String,
        required: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
