// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl';


document.addEventListener('DOMContentLoaded', () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZGFyaW8iLCJhIjoiY2phcGQ1amNpNHR3aTMycDdtbGU1eDJodCJ9.wOWx4S_gzEZc-rMq-jA9gA';
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
  });
})
