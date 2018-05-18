import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Accessible from '@material-ui/icons/Accessible';
import MapColum from './MapColum'

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
        google={this.props.google}
        initialCenter={{
          lat: -6.7743969,
          lng: -79.8430759
        }}
        zoom={14}
      >
        <Marker />
        <Marker
          position={{ lat: -6.7789944, lng: -79.853206 }} />
        <Marker />
        <Marker
          position={{ lat: -6.7798041, lng: -79.8495046 }}
          icon={{
            url: ".../icons/bad.png",
          }} />
        <MapColum className='mapColum' />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAXtS-4GCzr4NqjCEPOTjfkM_s7QpJRmnU')
})(MapContainer)