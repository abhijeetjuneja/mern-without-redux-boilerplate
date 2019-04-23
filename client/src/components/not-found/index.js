import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="not-found">
          <h1>404 Page not Found !</h1>
          <p>HTML for this Page - src/components/not-found/index.js</p>
          <p>CSS for this Page - src/components/not-found/style.css</p>
      </div>
    );
  }
}

NotFound.propTypes = {
  
};

export default NotFound;