const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        name: { type: String, max: 280 }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
    },
    userName: {
        type: String,
        required: true
    },
    reactions: {
        
    }
})