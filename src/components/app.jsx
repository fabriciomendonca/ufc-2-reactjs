import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const URL = 'https://api.github.com/users';

    axios.get(URL).then((response) => {
      this.setState({
        users: response.data
      })
    });
  }

  renderList() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => {
            return (
              <tr key={user.id}>
                <td><img src={user.avatar_url} width="30" /></td>
                <td>{user.login}</td>
                <td><a href={user.url} target="_blank">GitHub</a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const list = this.state.users ? this.renderList() : <div>Loading users...</div>;

    return(
      <div>
        <h1>Simple datatable app</h1>
        {list}
      </div>
    );
  }
}