import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get(`/api/users/${id}`);
  },
  getSelf: function () {
    return axios.get(`/api/users`);
  },
   // Gets the book with the given id
  getDoctor: function(id) {
    return axios.get(`/api/doctors/${id}`);
  },
  // Get all doctors
  getDoctors: function() {
    return axios.get("/api/users/?userType=Doctor");
  },
  // Get all doctors
  getClients: function () {
    return axios.get("/api/users/?userType=Client");
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
