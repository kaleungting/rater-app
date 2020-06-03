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
    const contentString = `<div class="businessInfo" id="biz-${business.id}">
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
      disableAutoPan: true,
    });

    marker.addListener("mouseover", function () {
      infoWindow.open(this.map, marker);
      const iw_container = $(".gm-style-iw").parent();
      iw_container.stop().hide();
      iw_container.fadeIn(400);
    });

    marker.addListener("mouseout", function () {
      infoWindow.close();
    });

    $(document).on("mouseleave", "div.businessInfo", function () {
      infoWindow.close(this.map, marker);
    });

    $(document).on("click", `div#biz-${business.id}`, function () {
      window.location.href = marker.url;
    });

    marker.addListener("click", function () {
      window.location.href = marker.url;
    });
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }

  removeAllMarkers() {
    Object.values(this.markers).forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = {};
  }
}
