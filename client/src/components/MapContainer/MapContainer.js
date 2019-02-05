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

    return (
      <div className={css.component}>
        <div className="map">
          <div className="mapContainer">
            <p><strong>{this.props.temp}°C à {this.props.city} ({this.props.postalCode})</strong>, il fait froid chez vous aujourd'hui</p>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: lat,
                lng: lng,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6GLuaDzqeDSk3nRkhgj_AsdVNzV_USyI'
})(MapContainer);