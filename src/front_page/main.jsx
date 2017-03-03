import React from 'react';
import NavBar from './navbar.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';
import 'whatwg-fetch';
import './main.css';

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
        <Content/>
        <Footer/>
      </div>
    );
  }
}
