import axios from "axios";

export default {
  register: function (username, password) {
    return axios({
      method: "POST",
      data: {
        username: username,
        password: password
      },
      withCredential: true,
      url: "/api/users/signup"
  }).then((res) => console.log(res));
},
  addPet: function (pets) {
    console.log(pets)
    return axios({
      method: "POST",
      data: pets,
      url: "/api/pets"
    }).then((res) => console.log(res, "hello"));
  }, 
  getMyPets: function (user) {
    return axios({
      method: "GET",
      withCredential: true,
      url: "/api/pets/" + user
    });
  },

  getPet: function (petid) {
    return axios({
      method: "GET",
      withCredential: true,
      url: "/api/pets/" + petid
    });
  },

  deletePet: function (petid) {
    return axios({
      method: "DELETE",
      withCredential: true,
      url: "/api/pets/" + petid
    }).then((res) => console.log(res));
  },


  updatePet: function (petid, data) {
    return axios({
      method: "PUT",
      data: data,
      withCredential: true,
      url: "/api/pets/" + petid
    }).then((res) => console.log(res));
  },

  getAllPets: function (user) {
    return axios({
      method: "GET",
      withCredential: true,
      url: "/api/pets/pet/" + user
      

    });
  },
};