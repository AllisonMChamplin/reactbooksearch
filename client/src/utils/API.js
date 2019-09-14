import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyA9gHF4U7-zcr2O0somzBjLg5O_D7vm7pE";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("API saveBook: ", bookData);

    return axios.post("/api/books", bookData);
  },
  search: function(query) {
    let test = BASEURL + query + APIKEY;
    console.log("test: ", test);
    console.log("query: ", query);
    console.log("?", BASEURL, query, APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  }
};
