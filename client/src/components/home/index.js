import React from 'react';
import './style.css'
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="home">
          <h1>Welcome to the Home Page !</h1>
          <p>HTML for this Page - src/components/home/index.js</p>
          <p>CSS for this Page - src/components/home/style.css</p>
      </div>
    );
  }
}

Home.propTypes = {
  
};

export default Home;