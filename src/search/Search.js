import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../input/Input';
import Button from './../button/Button';


class Search extends Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  cityWeather(val){
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='+val+'&appid=359f372936efcf8e93c400c866fdc089&units=metric')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson
        });
        this.props.searchResult(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.cityWeather(event.target.querySelector("input#search").value)
  }

  render() {
    return (
      <div className="Search">
        <h1>Search</h1>
        <form action="#" method="get" onSubmit={this.handleSubmit}>
          <div className="inputWrap">
            <Input  id={"search"}
                    type={"text"}
                    name={"search"}
                    placeholder={"City Name"}
                    required={true}
            />
            <Button id={Math.random().toString(36).substring(7)}
                    type={"submit"}
                    name={"Submit"}
                    value={"Submit"}
                    onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
