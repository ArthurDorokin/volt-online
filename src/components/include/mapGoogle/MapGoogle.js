import React, {Component} from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapGoogle extends Component {
    render() {
        return(
            <Map google={this.props.google} initialCenter={{lat: 50.4467778, lng: 30.5216127}} zoom={16}></Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA2wqz_Dz_LWEukfB3EgT4z9hHV7KEtOyg")
})(MapGoogle)