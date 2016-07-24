import React from 'react';

/* eslint-disable quote-props */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      postUserId: '',
      postTitle: '',
      postDescription: '',
      users: null,
      userEmail: '',
    };
  }

  componentDidMount() {
    this.getPosts();
    this.getUsers();
  }

  getPosts = () => {
    fetch('http://localhost:8000/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      this.setState({posts: json.posts});
    });
  };

  getUsers = () => {
    fetch('http://localhost:8000/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      this.setState({users: json.users});
    });
  };

  createPost = () => {
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: this.state.postUserId,
        title: this.state.postTitle,
        description: this.state.postDescription,
      }),
    });
  };

  createUser = () => {
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.userEmail,
      }),
    });
  };

  renderPosts() {
    if (!this.state.posts) {
      return <div>Loading...</div>;
    } else if (this.state.posts.length === 0) {
      return <div>No posts.</div>;
    }

    return this.state.posts.map((post) => (
      <li key={post.id}>{post.id} - {post.userId} - {post.title} - {post.description}</li>
    ));
  }

  renderUsers() {
    if (!this.state.users) {
      return <div>Loading...</div>;
    } else if (this.state.users.length === 0) {
      return <div>No users.</div>;
    }

    return this.state.users.map((user) => (
      <li key={user.id}>{user.id} - {user.email}</li>
    ));
  }

  render() {
    return (
      <div>
        <div>Users</div>
        <ul>{this.renderUsers()}</ul>
        <div>
          <input
            onChange={(e) => this.setState({userEmail: e.target.value})}
            placeholder="email"
            value={this.state.userEmail}
          />
          <button onClick={this.createUser}>Create</button>
        </div>
        <div>Posts</div>
        <ul>{this.renderPosts()}</ul>
        <div>
          <input
            onChange={(e) => this.setState({postUserId: e.target.value})}
            placeholder="userId"
            value={this.state.postUserId}
          />
          <input
            onChange={(e) => this.setState({postTitle: e.target.value})}
            placeholder="title"
            value={this.state.postTitle}
          />
          <input
            onChange={(e) => this.setState({postDescription: e.target.value})}
            placeholder="description"
            value={this.state.postDescription}
          />
          <button onClick={this.createPost}>Create</button>
        </div>
      </div>
    );
  }
}
