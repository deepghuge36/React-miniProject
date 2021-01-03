import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const userData = {
      email: email,
      password: password
    }
    console.log(userData);
  }
  render() {
    const { errors, email, password } = this.state
    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Link to='/' className='btn btn-dark m-2'> Home</Link>
              <br></br>
              <h6>if your not register click on ✋ <Link to='/register' className='btn btn-primary m-2'>Register</Link></h6>

            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'
                className='m-2'>Enter your email address</Label>
              <Input type='email' placeholder='Enter your email address'
                onChange={this.onChange}
                id='email'
                value={email}
                error={errors}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password
              '>Enter your password</Label>
              <Input type='password' placeholder='Enter your password'
                onChange={this.onChange}
                id='password'
                value={password}
                error={errors}
              ></Input>
            </FormGroup>
            <FormGroup>
              <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Login</button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    )
  }
}
