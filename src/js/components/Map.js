import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapColum from './MapColum'
import Grid from 'material-ui/Grid';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -6.7743969,
      lng: -79.8430759
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '95vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXtS-4GCzr4NqjCEPOTjfkM_s7QpJRmnU' }}
          defaultCenter={this.props.center}
          defaultZoom={14}
        >
          <Grid container spacing={24}>
            <Grid item xs={2} />
            <Grid item xs={8} >
            </Grid>
            <Grid  item xs={2}>
              <MapColum className='mapColum' />
            </Grid>            
          </Grid>

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;