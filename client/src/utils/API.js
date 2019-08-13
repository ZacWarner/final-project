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
    addProject: function (projData) {
        console.log("Utils");
        return axios.post("/api/project", projData);
    }
};