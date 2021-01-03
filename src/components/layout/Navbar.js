import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'
class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'https://www.linkedin.com/in/deepak-ghuge-6b8048ab/'

    }
  }

  render() {
    const { url } = this.state
    return (
      <Navbar className="lead">
        <Link to='/'>Home</Link>
        <Button color='primary' size="lg" target="_blank" href={url}>Linked-IN </Button>
      </Navbar >
    )
  }
}

export default Navigation