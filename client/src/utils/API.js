import axios from "axios";

export default {

    getChat: function (id) {
        return axios.get("/api/chat", { params: { projectId: id } });
    },
    saveChat: function (chatData) {
        return axios.post("/api/chat", chatData);
    },
    getProjects: function () {
        return axios.get("/api/project");
    },
    getProject: function (id) {
        return axios.get("/api/project/" + id);
    },
    deleteProject: function (id) {
        return axios.delete("/api/project/" + id);
    },
    updateProject: function (id, data) {
        console.log(id);
        return axios.put("/api/project/" + id, data);
    },
    addProject: function (projData) {
        console.log("Utils");
        return axios.post("/api/project", projData);
    },
    addModule: function (id, modData) {
        console.log("Util module");
        return axios.put("/api/project/module/" + id, modData);
    },
    updateModule: function (id, modid, data) {
        console.log(id);
        return axios.put("/api/project/module/" + id + "/" + modid, data);
    },
    deleteModule: function (projId, modId) {
        console.log(projId);
        console.log(modId);
        return axios.delete("/api/project/module/" + projId + "/" + modId);
    }
};