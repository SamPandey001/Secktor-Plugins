const mongoose = require('mongoose');
const fSchema = new mongoose.Schema({
chatbot: { type: String, default: "false"}
})
const RandomXP =  mongoose.model("RandomXP", fSchema)
modules.exports = { RandomXP }
