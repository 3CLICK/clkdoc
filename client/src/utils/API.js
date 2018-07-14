import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function() {
    return axios.get("/api/users/id");
  },
  // 
  getDoctors: function() {
    return axios.get("/api/users/?userType=Doctor");
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/"+ id);
  },
  // Saves a uUser to the database
  saveUser: function(user) {
    return axios.post("/api/users", user);
  }
};
