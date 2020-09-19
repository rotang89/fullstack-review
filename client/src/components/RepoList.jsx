import React from 'react';

const RepoList = (props) => {
      return (
      <div>
        <h4> Repo List Component </h4>
        There are {props.repos.length} repos.
        {props.repos.map((repo) => {
          return (
            <div>
              <div>Name: {repo.Repo_Name}</div>
              <div>Score: {repo.Score}</div>
            </div>
          )
        })}
      </div>
      )
}

export default RepoList;