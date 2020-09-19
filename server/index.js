const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database')
const axios = require('axios')
const config = require('../config.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  console.log('received post request')
  console.log(req.body.query)
  axios.get('https://api.github.com/search/users', {
    params: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      "q": req.body.query,
      "page": 1,
      "per_page": 1
    }
  })
  .then(function(API_res) {
    //username of first item from search API list
    return API_res.data.items[0].login
  })
  .then(function(user) {
    return axios.get(`https://api.github.com/users/${user}/repos`, {
      params: {
        'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
      }
    })
  })
  .then(function(repos) {
    // console.log(repos.data)
    repos.data.map((repo) => {
      db.save(repo)
    })
    res.end()
  })

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve((data) => {
    res.send(data)
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

