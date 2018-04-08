if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    console.log(lat);
    const long = position.coords.longitude;
    console.log(long);
    const point = new google.maps.LatLng(lat, long);
    new google.maps.Geocoder().geocode(
      { latLng: point },
      function (res, status) {
        // const zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
        console.log(res);
        const zip = res[0].address_components[7].short_name;
        $('#zipcode').text(zip);
      },
    );
  });
}

$('#zipcode').text('Hi there!');
