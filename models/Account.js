const mongoose = require('mongoose')

// Describe users collection
module.exports = mongoose.model('Account', new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
    number: {type: String, unique: true, required: true, maxlength: 100},
    currency: {type: String, required: true, minlength: 3, maxlength: 3},
    balance: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
}, {

    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
        }
    }
}));