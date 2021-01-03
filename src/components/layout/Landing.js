import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
export default function Landing() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-1"> Welcome Authentication</h1>
        <p className="lead">Click here to Login </p>
        <Link className="btn btn-primary" to='/login'>Login</Link>
        <p className="my-2 lead">Click here to Register</p>
        <Link className="btn btn-danger" to='/register' >Register</Link>
      </Jumbotron>
    </div >
  );
};
