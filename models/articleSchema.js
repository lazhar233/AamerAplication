const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const articleSchema = new Schema({
    nameee: String,
    mailll: String,
    passss: String,
});
 
 
const lazhar = mongoose.model("Article", articleSchema);
 
 
module.exports = lazhar;