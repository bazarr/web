import React from 'react';

/* eslint-disable quote-props */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      posts: null,
      postUserId: '',
      postTitle: '',
      postDescription: '',
      users: null,
      userEmail: '',
      search: null,
      searchTitle: '',
    };
  }

  componentDidMount() {
    this.getCity();
    this.getPosts();
    this.getUsers();
    this.getSearch();
  }

  getCity = () => { 
    fetch('http://freegeoip.net/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      this.setState({city: json.city});
    });
  };

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

  getSearch = () => {
    var title = this.state.searchTitle.trim().replace(/\s+/g, " ").replace(/\s/g, "-")

    if(title){
      fetch('http://localhost:8000/search/' + title, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({search: json.result});
      });
  }

  else{
      fetch('http://localhost:8000/search/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({search: json.result});
      });
  }

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


  renderCity() {
    if (!this.state.city) {
      return <div>Loading...</div>;
    } else if (this.state.city.length === 0) {
      return <div>Can't find city.</div>;
    }

    return this.state.city;
  }

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

  renderSearch() {
  if (!this.state.search) {
      return <div>Loading...</div>;
    } else if (this.state.search.length === 0) {
      return <div>No Results.</div>;
    }

    return this.state.search.map((result) => (
      <li key={result.id}>{result.id} - {result.userId} - {result.title} - {result.description}</li>
    ));
  }

  render() {
    return (
      <div>
        <div>City</div>        
        <ul>{this.renderCity()}</ul>

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

        <div>Search Result</div>
        <ul>{this.renderSearch()}</ul>
        <div>
          <input
            onChange={(e) => this.setState({searchTitle: e.target.value})}
            placeholder="search title"
            value={this.state.searchTitle}
          />
          <button onClick={this.getSearch}>Search</button>
        </div>
      </div>
    );
  }
}
