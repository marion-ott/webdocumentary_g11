import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import css from './map.scss'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  render() {
    const lat = this.props.lat
    const lng = this.props.lng
    console.log(lat, lng)
    return (
      <div className={css.component}>
        <div className="map">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 44,
              lng: 2.4432,
            }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6GLuaDzqeDSk3nRkhgj_AsdVNzV_USyI'
})(MapContainer);