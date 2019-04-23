import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="privacy-policy">
          <h1>Welcome to the Privacy Policy Page !</h1>
          <p>HTML for this Page - src/components/privacy-policy/index.js</p>
          <p>CSS for this Page - src/components/privacy-policy/style.css</p>
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  
};

export default PrivacyPolicy;