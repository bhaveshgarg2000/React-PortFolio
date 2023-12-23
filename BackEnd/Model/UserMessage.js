const mongoose = require('mongoose');
// SCHEMA
const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email:
    {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,

    }
});
// MODEL
const Message = new mongoose.model('Message', MessageSchema);
module.exports = Message