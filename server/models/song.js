const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {
        type: String
    },
    artist: {
        type: String
    },
    streams: {
        type: String
    },
    URL: {
        type: String
    },
    weeks: [
        {
            weekFriday: { type: Date },
            position: { type: String },
            index: { type: String },
        }
    ],
});

module.exports = mongoose.model('Song', songSchema);