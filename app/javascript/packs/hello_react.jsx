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
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [1.414531359571465, 43.602050919601445],
      zoom: 12,
  });

  var bikeData = JSON.parse(
    document.getElementById('map')
            .getAttribute('data')
    );

  bikeData.forEach(function(element) {

    var markerHeight = 50, markerRadius = 10, linearOffset = 25;
    var popupOffsets = {
     'top': [0, 0],
     'top-left': [0,0],
     'top-right': [0,0],
     'bottom': [0, -markerHeight],
     'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
     'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
     'left': [markerRadius, (markerHeight - markerRadius) * -1],
     'right': [-markerRadius, (markerHeight - markerRadius) * -1]
     };

    var popup = new mapboxgl.Popup({offset:popupOffsets})
      .setLngLat([element.position.lng, element.position.lat])
      .setHTML(element.available_bikes)
      .addTo(map);

    var marker = new mapboxgl.Marker()
      .setLngLat([element.position.lng, element.position.lat])
      .setPopup(popup)
      .addTo(map);

  });
})