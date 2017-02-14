import React from 'react';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.getCity = this.getCity.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.state = {};
    }
    
    componentDidMount() {
        this.getCity();
        this.getCategory();
    }

    getCity = () => {
        fetch('https://freegeoip.net/json/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                city: json.city
            });
        });
    };

    getCategory = () => {
        fetch('https://bazarr-python.herokuapp.com/predict?text=music', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                categories: json.Books
            });
        });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" style={{background: 'purple'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" style={{color: 'white'}} href="#">Bazarr {this.state.city}</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#" style={{color: 'white'}}>Posts</a></li>
                                <li><a href="#" style={{color: 'white'}}>Search</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron" style={{margin: '50px 0 0 0'}}>
                    <div className="container">
                        <div className="text-center">
                            <h1>Welcome to Bazarr!</h1>
                            <h1>{this.state.categories}</h1>
                            <p>Join the growing community</p>
                        </div>
                        <div className="row" style={{margin: 'auto', padding: '25px 0 0 0', maxWidth:'600px'}}>
                            <div className="col-lg-12">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}