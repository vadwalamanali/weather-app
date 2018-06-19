import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Search from './../search/Search';

class User extends Component{
  constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
searchResult(data) {
  this.setState({
    isLoading: false,
    cityWeather: data
  });
}
componentDidMount(){
  let city;
  this.props.location.state ? this.props.location.state.from.user ? city = this.props.location.state.from.user.city.value : city = this.props.location.state.from.city.value :null
  if(this.props.location.state) {
  return fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=359f372936efcf8e93c400c866fdc089&units=metric')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        data: this.props.location.state.from,
        cityWeather: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
}
render() {
    if(this.props.location.state) {
      if(this.state.isLoading) {
        return (
          <div>Please wait...</div>
        )
      }
      const weatherIcon = "http://openweathermap.org/img/w/"+this.state.cityWeather.weather[0].icon+".png"
      let name;
      this.props.location.state.from.user ? name = this.props.location.state.from.user.name.value : name = this.props.location.state.from.name.value
      return (
        <div>
          <div>{name}</div>
           <div><img src={weatherIcon} alt="" /></div>
          <div>{this.state.cityWeather.main.temp}°</div>
          <div>{this.state.cityWeather.name}</div>
          <div>{this.state.cityWeather.weather[0].description}</div>
          <Search searchResult={this.searchResult.bind(this)}/>
        </div>
      )
    } else {
      return (
        <Redirect to={{
          pathname: "/loginregister"
        }}/>
      )
    }
  }
}
export default User;
