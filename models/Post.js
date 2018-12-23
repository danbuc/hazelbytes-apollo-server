const mongoose = require('mongoose');

const ObjectId = require('mongoose').Types.ObjectId;
ObjectId.prototype.valueOf = function() {
    return this.toString();
};

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    textBlock: [{
        headline: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: false
        }
    }],
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    messages: [{
        messageBody: {
            type: String,
            required: true
        },
        messageDate: {
            type: Date,
            default: Date.now
        },
        messageUser: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }]
})

module.exports = mongoose.model('Post', PostSchema)