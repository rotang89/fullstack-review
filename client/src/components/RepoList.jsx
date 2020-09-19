import React from 'react';

const RepoList = (props) => {
  console.log(props, 'props')
  if (props.repos.length === 0 ) {
    const list = 'no repos available'
  } else {
    const list = props.repos.map((repo) =>{
    <div>Name: {repo.Owner.name}</div>
    })
  };
    return (
      <div>
        <h4> Repo List Component </h4>
        There are {props.repos.length} repos.
      </div>
    )
  }

  // {props.repos[0].Repo_Name}

export default RepoList;