import React from 'react';

const RepoList = (props) => {
      return (
        <div>
        <h3> Repo List Component </h3>
        <h4>There are {props.repos.length} repos.</h4>
        <h4 className = 'details'>Repo</h4>
        <h4 className = 'owner'>Owner</h4>
        {props.repos.map((repo) => {
          return (
            <div className='container' key={repo.ID}>
              <div className='details'>
                <div>{repo.Repo_Name}</div>
                <div><a href={repo.URL} target="_blank">{repo.URL}</a></div>
                <div>{repo.Description}</div>
              </div>
              <div className='owner'>
                <div>{repo.Owner.name}</div>
                <div><a href={repo.Owner.url} target="_blank">{repo.Owner.url}</a></div>
              </div>
            </div>
          )
        })}
      </div>
      )
}

export default RepoList;