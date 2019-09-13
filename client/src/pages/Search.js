import React, { Component } from "react";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
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
            <>
                <Jumbotron>
                    <h1>React Google Books Search</h1>
                    <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                books={this.state.books}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                            <SearchResults results={this.state.results} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Search;
