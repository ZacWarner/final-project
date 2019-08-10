const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    dev_name: { type: String, required: true },
    dev_skills: [{ type: String, required: true }],
    image: String,
    projects: [{ type: String }]
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;