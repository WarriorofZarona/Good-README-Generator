const axios = require("axios");

const api = {
  getUser(username) {

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => {
        const userData = res.data;
        console.log(userData);
        // Token 3ce007c996856c61a53651951ca3bd66d3cc56d5
      });

  }
};

module.exports = api;
