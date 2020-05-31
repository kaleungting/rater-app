import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);

    this.idleBounds = this.idleBounds.bind(this);
    this.clickMap = this.clickMap.bind(this);
  }

  componentDidMount() {
    let mapOptions;
    if (this.props.business) {
      mapOptions = {
        center: { lat: this.props.business.lat, lng: this.props.business.lng },
        zoom: 15,
      };
    } else if (this.props.match.path === "/businesses-search") {
      mapOptions = {
        center: {
          lat: this.props.businesses[0].lat,
          lng: this.props.businesses[0].lng,
        },
        zoom: 13,
      };
    } else {
      mapOptions = {
        center: { lat: 40.75231, lng: -73.98563 },
        zoom: 13,
      };
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.updateMarker = false;

    if (this.props.match.path === "/businesses-filter") {
      this.MarkerManager.removeAllMarkers();
      this.MarkerManager.updateMarkers(this.props.businesses);
    } else if (this.props.match.path === "/businesses-search") {
      this.MarkerManager.removeAllMarkers();
      this.clickMap();
      this.idleBounds();
      this.updateMarker = true;
      this.MarkerManager.updateMarkers(this.props.businesses);
    } else {
      if (this.props.businesses) {
        this.MarkerManager.removeAllMarkers();
        this.clickMap();
        this.idleBounds();
        this.MarkerManager.updateMarkers(this.props.businesses);
      } else if (this.props.business) {
        this.MarkerManager.createMarkerFromBusiness(this.props.business);
      }
    }
  }

  idleBounds() {
    let that = this;
    google.maps.event.addListener(that.map, "idle", () => {
      const { north, south, east, west } = that.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };

      if (!that.updateMarker || that.updateMarker === undefined) {
        that.props.updateFilter("bounds", bounds);
        that.props.history.push("/businesses");
      } else {
        that.updateMarker = false;
      }
    });
  }

  clickMap() {
    let that = this;
    google.maps.event.addListener(that.map, "bounds_changed", () => {
      that.updateMarker = false;
    });
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      if (
        this.props.businesses &&
        this.props.match.path === "/businesses-search"
      ) {
        this.MarkerManager.removeAllMarkers();
        this.updateMarker = true;
        this.MarkerManager.updateMarkers(this.props.businesses);
        if (this.props.businesses.length !== 0) {
          this.moveMap(
            this.props.businesses[0].lat,
            this.props.businesses[0].lng
          );
        }
      } else if (this.props.businesses) {
        this.MarkerManager.removeAllMarkers();
        this.updateMarker = true;
        this.MarkerManager.updateMarkers(this.props.businesses);
      } else if (this.props.business) {
        this.MarkerManager.createMarkerFromBusiness(this.props.business);
      }
    }
  }

  moveMap(lat, lng) {
    const center = new google.maps.LatLng(lat, lng);
    this.map.panTo(center);
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BusinessMap);
