import axios from "axios";

export default {

    getChat: function (id) {
        return axios.get("/api/chat", { params: { projectId: id } });
    },
    saveChat: function (chatData) {
        return axios.post("/api/chat", chatData);
    }
};