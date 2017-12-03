import PropTypes from 'prop-types';
import React from 'react';


export default class Map extends React.Component {

  constructor(props) {

    super(props);

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    this.state = { data: this.props.data,
                    windowSize: {
                      width: width,
                      height: height
                    } };

  }



  render() {

    return (
      <div id='map' style={{width: this.state.windowSize.width, height: this.state.windowSize.height}} data={this.state.data}></div>
    );
  }

}