import PropTypes from 'prop-types';
import React from 'react';


export default class Map extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (
      <div id='map' style={{width: '400px', height: '300px'}}></div>
    );
  }

}