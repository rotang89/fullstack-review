import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    const self = this;
    axios.get('/repos')
    .then(function (res) {
      // console.log(res.data)
      self.setState({
        repos: [...res.data]
    })
    })
  }

  search (query) {
    console.log(`${query} was searched`);
    // TODO
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: {query}
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));