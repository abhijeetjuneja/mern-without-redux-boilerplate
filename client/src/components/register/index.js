import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="register">
          <h1>Welcome to the Register Page !</h1>
          <p>HTML for this Page - src/components/register/index.js</p>
          <p>CSS for this Page - src/components/register/style.css</p>
      </div>
    );
  }
}

Register.propTypes = {
  
};

export default Register;