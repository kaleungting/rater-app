import React from "react";
import MarkerManager from "../../util/marker_manager";
class BusinessMap extends React.Component {
  componentDidMount() {
    let mapOptions;
    if (this.props.business) {
      mapOptions = {
        center: { lat: this.props.business.lat, lng: this.props.business.lng },
        zoom: 15,
      };
    } else {
      mapOptions = {
        center: { lat: 40.75231, lng: -73.98563 },
        zoom: 13,
      };
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.businesses) {
      this.idleBounds();
      this.MarkerManager.updateMarkers(this.props.businesses);
    } else if (this.props.business) {
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
    }
  }

  idleBounds() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      this.props.updateFilter("bounds", bounds);
    });
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      if (this.props.businesses) {
        this.MarkerManager.updateMarkers(this.props.businesses);
      } else if (this.props.business) {
        this.MarkerManager.createMarkerFromBusiness(this.props.business);
      }
    }
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default BusinessMap;
