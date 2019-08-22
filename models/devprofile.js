const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    dev_name: { type: String, required: true },
    dev_skills: [{ type: String }],
    role: String,
    ph: String,
    linkedin: String,
    image: String,
<<<<<<< HEAD
    projects: [{ type: String }],
    notes: [{ type: String }]
=======
    projects: [{
        proj_name: String,
        proj_id: String
    }]
>>>>>>> 945348569eb3173c52778708cd6832ed1a4055b9
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;