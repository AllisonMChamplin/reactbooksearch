import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    };



    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Clicky", this.state.search);
        console.log("FIX ME");
        API.search(this.state.search)
            .then(res => {
                console.log("hi");
                console.log("res.data.items", res.data.items);
                this.setState({ results: res.data.items, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>React Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <SearchForm
                            handleInputChange={this.handleInputChange}
                            books={this.state.books}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                        <SearchResults results={this.state.results} />
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Search;
