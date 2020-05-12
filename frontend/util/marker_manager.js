export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    const businessesObj = {};
    businesses.forEach((business) => (businessesObj[business.id] = business));

    businesses.forEach((newBusiness, index) =>
      this.createMarkerFromBusiness(newBusiness, index + 1)
    );
    Object.keys(this.markers)
      .filter((businessId) => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));
  }

  createMarkerFromBusiness(business, index = "") {
    const myLatLng = { lat: business.lat, lng: business.lng };
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: business.name,
      label: `${index}`,
      businessId: business.id,
      url: `#/biz/${business.id}`,
    });

    let ratingClass =
      `stars-medium-${Math.floor(business.average_rating * 2)}` +
      " stars-medium";
    const contentString = `<div class="businessInfo">
                            <div class="info-photo-container">
                              <img class="info-photo" src="${business.profile_picture}"/>
                            </div>
                            <p class="info-title">${business.name}</p>
                            <div class="business-rating">
                              <img class="${ratingClass}"
                                  src="https://i.imgur.com/UkZkm0D.png">${business.reviewIds.length}</img>
                          </div>`;

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("mouseover", function () {
      infoWindow.open(this.map, marker);
    });

    $(document).on("mouseleave", "div.businessInfo", function () {
      infoWindow.close(this.map, marker);
    });

    // $(document).on("click", "div.businessInfo", function () {
    //   window.location.href = `#/biz/${business.id}`;
    // });

    marker.addListener("click", function () {
      window.location.href = marker.url;
    });
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

// <div className="businessInfo">
//   <img className="info-photo" src="business.profile_picture" />
//   <p className="info-title">business.name</p>
// </div>;
