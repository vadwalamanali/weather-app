import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../input/Input';
import Button from './../button/Button';
import './Login.css';
class Login extends Component{
  constructor(props) {
  super();
  this.state = {
      validUser: false
    }
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(event){
  event.preventDefault();
  for(let key in localStorage){
    if(key.indexOf("user-") == 0) {
        const data = JSON.parse(localStorage.getItem(key));
        (
          data.name.value === event.target.querySelector("input#userName").value &&
          data.password.value === event.target.querySelector("input#userPassword").value
        ) ? (
            this.setState({
              validUser: true,
              user: data
           }),event.target.reset()
        ) : null
      }
  }
}

  render() {
    const { validUser } = this.state;
    return (
      <div className="Login">
      <h1>Login</h1>
      <form action="#" method="get" onSubmit={this.handleSubmit} autoComplete="off">
      <Input  id={"userName"}
                  type={"text"}
                  name={"name"}
                  placeholder={"Name"}
                  required={true}
          />
          <Input  id={"userPassword"}
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  required={true}
          />
          <Button
                  type={"submit"}
                  name={"Login"}
                  value={"Login"}

          />
      </form>
      {
        validUser && (<Redirect to={{
            pathname: "/user",
            state: { from: this.state }
        }}/>)}
      </div>
    );
  }
}


export default Login;
