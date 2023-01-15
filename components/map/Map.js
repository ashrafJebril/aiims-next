import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class MyMapComponent extends Component {
  render() {
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {this.props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent));

export default class GoogleMapWrapper extends Component {
  render() {
    return (
      <div>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
