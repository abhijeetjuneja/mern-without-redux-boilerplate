import React from 'react'
import './style.css'
import PropTypes from 'prop-types';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="about">
          <h1>Welcome to the About Page !</h1>
          <p>HTML for this Page - src/components/about/index.js</p>
          <p>CSS for this Page - src/components/about/style.css</p>
      </div>
    );
  }
}

About.propTypes = {
  
};

export default About;