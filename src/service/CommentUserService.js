import axios from 'axios';

const COMMENT_API_BASE_URL = "http://192.168.1.9:8080/api/v1/comment";


class CommentUserService {
    saveComment(comment_user) {
        return axios.post(COMMENT_API_BASE_URL, comment_user);
    }
}

export default new CommentUserService();