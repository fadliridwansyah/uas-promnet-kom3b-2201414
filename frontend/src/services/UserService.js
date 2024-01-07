import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9080/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  createUser(reports) {
    return axios.post(USER_API_BASE_URL, reports);
  }

  getUserById(reportsId) {
    return axios.get(USER_API_BASE_URL + "/" + reportsId);
  }

  updateUser(reports, reportsId) {
    return axios.put(USER_API_BASE_URL + "/" + reportsId, reports);
  }

  deleteUser(reportsId) {
    return axios.delete(USER_API_BASE_URL + "/" + reportsId);
  }
}

export default new UserService();
