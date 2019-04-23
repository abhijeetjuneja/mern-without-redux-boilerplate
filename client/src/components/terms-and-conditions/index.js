import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="terms-and-conditions">
          <h1>Welcome to the Terms and Conditions Page !</h1>
          <p>HTML for this Page - src/components/terms-and-conditions/index.js</p>
          <p>CSS for this Page - src/components/terms-and-conditions/style.css</p>
      </div>
    );
  }
}

TermsAndConditions.propTypes = {
  
};

export default TermsAndConditions;