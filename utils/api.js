const axios = require('axios');
const dotenv = require('dotenv').config();
const api = {
  getUser(username) {
    return axios
      ({
        url: `https://api.github.com/users/${username}`,
        method: "get",
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_PASS
        }
      }).then(res => {
        const userData = res.data;
        return userData;
      })
      .catch(err => {
        console.log('err ', err);
      })
  }
};

module.exports = api;
