export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach((business) => {
      if (!Object.keys(this.markers).includes(business.id)) {
        this.createMarkerFromBusiness(business);
      }
    });
  }

  createMarkerFromBusiness(business) {
    const myLatLng = { lat: business.lat, lng: business.lng };

    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: business.name,
      url: `/businesses/${business.id}`,
    });

    marker.setMap(this.map);
    Object.assign(this.markers, { [business.id]: marker });
  }
}
