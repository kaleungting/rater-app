import React from "react";

class BusinessMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.75231, lng: -73.98563 },
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default BusinessMap;
