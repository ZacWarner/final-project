const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    proj_name: { type: String, required: true },
    proj_owner: { type: String, required: true },
    proj_description: String,
    due_date: Date,
    modules: [
        {
            mod_name: { type: String, required: true },
            mod_description: String,
            mod_due: Date,
            developer: String,
            parent: String
        }
    ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;