const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    proj_name: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    proj_owner: {
        type: String, required: true
    },
    proj_description: { type: String, default: "Project" },
    start_date: { type: Date, default: Date.now },
    due_date: Date,
    developers: [String],
    proj_complete: { type: Boolean, default: false },
    modules: [
        {
            mod_name: {
                type: String,
                lowercase: true,
                trim: true
            },
            mod_description: String,
            mod_due: Date,
            developer: String,
            parent: { type: String },
            complete: { type: Boolean, default: false },
            level1module: { type: Boolean, default: true }
        }
    ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;