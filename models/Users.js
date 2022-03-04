const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');
const dateFormat = require('../utils/dataFormat');

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: ''
    //     }
    // ]
})
// create the User model using the UserSchema
const User = model('User', UserSchema);


// export the User model
module.exports = User;