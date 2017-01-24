import React from 'react';
import Styles from '../css/main.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.getCity = this.getCity.bind(this);
    this.renderCity = this.renderCity.bind(this);

    this.state = {
      background: null
    };
  }

  componentDidMount() {
    this.getCity();
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
        
    });
  };
  
  renderCity = () => {
    if(this.state.background == null) {
      return 'Loading...';
    } else {
      return(<div style={this.state}></div>);
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderCity()}</div>
      </div>
    );
  }
}
