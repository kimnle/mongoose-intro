const mongoose = require("mongoose");

const LocalisedContentSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true,
        default: "en" // fr, ko
    },
    content: {
        type: String,
        required: true
    },
    timezone: String
});

// Do not want a model, subdocuments are just schemas!!
// const LocalisedContentModel = mongoose.model("LocalisedContent", LocalisedContentSchema);

module.exports = {
    LocalisedContentSchema
}