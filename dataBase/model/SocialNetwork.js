const mongoose = require('mongoose');
const Schema = mongoose.Schema

const socialNetworkSchema = Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    icon:  { type: String, required: true },
    description: String,
    
});

const SocialNetwork = mongoose.model('SocialNetwork', socialNetworkSchema);

module.exports = SocialNetwork;
