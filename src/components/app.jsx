import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
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
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => {
            return (
              <tr key={user.id}><td>{user.login}</td></tr>
            )
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const list = this.state.users ? this.renderList() : '<div>Loading users...</div>';

    return(
      <div>
        <h1>Simple datatable app</h1>
        {list}
      </div>
    );
  }
}