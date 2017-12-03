import PropTypes from 'prop-types';
import React from 'react';


export default class Map extends React.Component {

  constructor(props) {

    super(props);
    this.state = { data: this.props.data };
  }



  render() {
    return (
      <div id='map' style={{width: '400px', height: '300px'}} data={this.state.data}></div>
    );
  }

}