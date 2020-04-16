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
      this.MarkerManager.updateMarkers(this.props.businesses);
    } else if (this.props.business) {
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
    }
  }

  idleBounds() {
    if (this.map) {
      this.map.addListener("idle", () => {
        this.LatLngBounds = this.map.getBounds();
      });
      const northEast = this.LatLngBounds.getNorthEast();
      const southWest = this.LatLngBounds.getSouthWest();
      const northEastLat = northEast.lat;
      const northEastLng = northEast.lng;
      const southWestLat = southWest.lat;
      const southWestLng = southWest.lng;
      const bounds = {
        northEast: { lat: northEastLat, lng: northEastLng },
        southWest: { lat: southWestLat, lng: southWestLng },
      };
      this.props.updateBounds(bounds);
    }
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
