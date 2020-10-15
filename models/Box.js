const mongoose = require('mongoose');

// //SuggestionSchema fields:



// anonymous - should be a boolean
// timeCreated - should be a date

const BoxSchema = new mongoose.Schema({
    title: { type: String, lowercase: true, unique: true, required: true },
    name: { type: String, lowercase: true, required: true  },
    suggestion: { type: String, lowercase: true, required: true },
    likes: { type: Number, default: 0 },
    anonymous: { type: Boolean },
    timeCreated: { type: Date}
});
