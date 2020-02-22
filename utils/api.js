const axios = require('axios');
const dotenv = require('dotenv').config();

// const config = {
//   auth: {
//     username: "WarriorofZarona",
//     password: "Tetsurohoshino!1"
const api = {
  getUser(username) {

    axios({
      url: `https://api.github.com/users/${username}`,
      method: "get",
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_PASS
      }
    }).then(res => {
      const userData = res.data;
      console.log(userData);
      // Token 3ce007c996856c61a53651951ca3bd66d3cc56d5
    })
      .catch(err => {
        console.log('err ', err);
      })

  }
};

module.exports = api;
