/* global google */
import React, {
    Component
} from 'react'

import '../styles/Map.css';

const MapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#2c3239"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#06bebd"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

class Map extends Component {
    componentDidMount() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {
                initialZoom: 6,
                lat: 53.5333,
                lng: -113.4073126
            },
            zoom: 8,
            styles: MapStyle
        });
        this.setState({
            map: map
        });
    }

    initMap() {
    }

    render() {
        return (
            <div id="map" className="map-container"/>
        )
    }
}

export default Map