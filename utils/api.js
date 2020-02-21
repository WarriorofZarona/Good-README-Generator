const axios = require("axios");

const api = {
  getUser(username) {

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => console.log(res.data));

  }
};

module.exports = api;
