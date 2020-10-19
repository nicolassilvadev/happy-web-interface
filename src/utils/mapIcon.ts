import Leaflet from 'leaflet';

import mapMarkerImg from '../images/mini_logo.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

export default mapIcon;