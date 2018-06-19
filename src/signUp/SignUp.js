import React, { Component } from 'react';
import Input from './../input/Input';
import Button from './../button/Button';
import './SignUp.css';


class SignUp extends Component{
  constructor(props) {
  super();
  this.state = {
      validUser: false
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
    this.setState({
      [event.target.id]: {
        id: [event.target.id].toString(),
        value: [event.target.value].toString()
      }
    });
}
handleSubmit(event){
   event.preventDefault();

   localStorage.setItem("user-"+event.target.querySelector("button").id, JSON.stringify(this.state));
   event.target.reset();
}
  render() {
    return (
      <div className="SignUp">
        <h1>SignUP</h1>
        <form action="#" method="get" onSubmit={this.handleSubmit}>
            <div className="inputWrap">
            <Input  id={"name"}
                  type={"text"}
                  name={"name"}
                  placeholder={"Name"}
                  required={true}
                  onChange={this.handleChange}
          />
          <Input id={"password"}
                 type={"password"}
                 name={"password"}
                 placeholder={"Password"}
                 required={true}
                 onChange={this.handleChange}
          />
          <Input id={"email"}
                 type={"email"}
                 name={"email"}
                 placeholder={"Email"}
                 required={true}
                 onChange={this.handleChange}
          />
          <Input id={"city"}
                  type={"text"}
                  name={"city"}
                  placeholder={"City"}
                  required={true}
                  onChange={this.handleChange}
          />
          <Button
                    type={"submit"}
                    name={"register"}
                    value={"Register"}
                    onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
