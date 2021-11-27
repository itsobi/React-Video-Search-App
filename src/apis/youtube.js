import axios from "axios";

const KEY = "AIzaSyA0WGfa92CAA63GrCqb2ZvhJuWkU9g5ED0";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResult: 5,
        key: KEY
    }
});