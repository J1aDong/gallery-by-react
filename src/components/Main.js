require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <span>Hello</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get tarted!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
