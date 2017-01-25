import React from 'react';
import NavBar from './navbar.jsx';
import PostList from './postlist.jsx';
import PostForm from './postform.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="row"  style={{margin: "50px 0 0 0"}}>
          <div className="container-fluid">
            <PostForm/>
            <PostList/>
          </div>
        </div>
      </div>
    );
  }
}
