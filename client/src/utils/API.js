import axios from "axios";

export default {
  // Gets all books
  getUsers: () => {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: (id) => {
    return axios.get(`/api/users/${id}`);
  },
  getSelf:  () => {
    return axios.get(`/api/users`);
  },
   // Gets the book with the given id
  getDoctor: function(id) {
    return axios.get(`/api/doctors/${id}`);
  },
  // Get all doctors
  getDoctors: () => {
    return axios.get("/api/users/?userType=Doctor");
  },
  // Get all doctors
  getClients:  () => {
    return axios.get("/api/users/?userType=Client");
  },
  // Deletes the User with the given id
  deleteUser: (id) => {
    return axios.delete("/api/users/"+ id);
  },
  // Saves a uUser to the database
  saveUser: (user) => {
    return axios.post("/api/users", user);
  },
  login:  (user) => {
    return axios.post("/login", user);
  },
  logout:  (user) => {
    return axios.post("/logout", user);
  }

};
