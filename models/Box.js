const mongoose = require('mongoose');

const BoxSchema = new mongoose.Schema({
    title: { type: String, lowercase: true, unique: true, required: true },
    name: { type: String, lowercase: true, required: true  },
    suggestion: { type: String, lowercase: true, required: true },
    likes: { type: Number, default: 0 },
    anonymous: { type: Boolean },
    timeCreated: { type: Date}
});

module.exports = mongoose.model('box', BoxSchema);
