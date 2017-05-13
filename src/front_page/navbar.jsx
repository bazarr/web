import React from 'react';
import { Modal, Nav, NavItem, Navbar, FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import PostForm from './postform.jsx';

export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.getCity = this.getCity.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.state = {location: 'Fetching Location...', showModal: false};
    }
    
    componentDidMount() {
        this.getCity();
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

    open = () => {
        this.setState({
            showModal: true
        });
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div>
                <Navbar style={{background: 'purple'}} fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Bazzar</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder={this.state.location}/>
                            </FormGroup>
                        </Navbar.Form>
                        <Navbar.Form pullRight>
                            <Button bsStyle="primary" onClick={this.open} >{"Sell my stuff"}</Button>
                            <Modal bsSize="large" show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create a post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <PostForm/>
                            </Modal.Body>
                            </Modal>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <div className="jumbotron bazarr-background-image">
                    <div className="container">
                        <div className="text-center">
                            <h1>Welcome to Bazarr!</h1>
                            <p>Join the growing community</p>
                        </div>
                        <div className="row product-searchbar">
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