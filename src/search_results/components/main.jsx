import React from 'react';
import Header from './header.jsx';
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
        <Header/>
        <Content/>
      </div>
    );
  }
}
