const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  ID: Number,
  Repo_Name: String,
  Owner: {name: String, url: String, id: Number},
  URL: String,
  Description: String,
  stargazers_count: Number,
  forks_count: Number,
  watchers_count: Number,
  Score: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  var repo = {
    ID: data.id,
    Repo_Name: data.name,
    Owner: {name: data.owner.login, url: data.owner.url, id: data.owner.id},
    URL: data.url,
    Description: data.description,
    stargazers_count: data.stargazers_count,
    forks_count: data.forks,
    watchers_count: data.watchers,
    Score: data.stargazers_count + data.forks +data.watchers
  }
  Repo.create(repo, (err, instance) => {
    if (err) {
      console.log(err, 'database create error')
    } else {
      console.log('database sucess')
    }
  })
}

var retrieve = (callback) => {

  Repo.find({}, function(err, repoData) {
    console.log('connected to database')
    if (err) {
      console.log(err)
    } else {
      const arr = repoData.map((repo) => repo._doc)
      callback(arr)
    }
  })
}

module.exports.save = save;

module.exports.retrieve = retrieve;