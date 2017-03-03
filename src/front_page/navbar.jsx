import React from 'react';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.getCity = this.getCity.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.state = {location: 'Fetching Location...'};
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
                location: json.city + ', ' + json.region_name
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
            <div className="navbar-box">
                <nav className="navbar navbar-default navbar-fixed-top navbar-content" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" style={{color: 'white'}} href="#">Bazarr</a>
                        </div>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={this.state.location}/>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="jumbotron bazarr-background-image">
                    <div className="container">
                        <div className="text-center">
                            <h1>Welcome to Bazarr!</h1>
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