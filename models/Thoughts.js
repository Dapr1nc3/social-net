const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        name: { type: String, max: 280 }
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
    },
    reactions: [reactionSchema]
},
    // {
    //     toJSON: {
    //         virtuals: true,
    //         getters: true
    //     },
    //     id: false
    // }
);

const Thoughts = model('Thoughts', ThoughtSchema);

module.exports = Thoughts; 