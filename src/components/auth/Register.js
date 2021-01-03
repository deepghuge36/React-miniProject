
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    const newUser = ({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    });
    console.log(newUser);
  };


  render() {
    const { name, email, password, password2, errors } = this.state
    return (
      <Form className="center m-5">
        <FormGroup>
          <Label htmlFor="name">Enter Your First Name</Label>
          <Input
            type='text'
            name='name' id='name'
            placeholder='enter your name'
            onChange={this.onChange}
            value={name}
            error={errors}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Enter your Email</Label>
          <Input
            type='email' name='email' id='email'
            placeholder='Enter your email address'
            onChange={this.onChange}
            value={email}
            error={errors}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Enter your password</Label>
          <Input
            type='password' name='password'
            id='password' placeholder='Enter your password'
            onChange={this.onChange}
            value={password}
            error={errors}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password2">Enter your password2</Label>
          <Input
            type='password2' name='password2'
            id='password2' placeholder='Enter your password2'
            onChange={this.onChange}
            value={password2}
            error={errors}
          />
        </FormGroup>
        <Button color='primary' className='m-5' type='submit' onClick={this.onSubmit}>Register</Button>
        <Link to='/login' className='btn btn-danger m-5' >Login</Link>
      </Form >
    )
  }
}
