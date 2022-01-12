import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={query} onChange={this.handleChange}></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
