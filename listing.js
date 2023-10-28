// DOM Elements
const resultItems = JSON.parse(localStorage.getItem("listingItems") ?? "{}");
const parsedResultItems = JSON.parse(resultItems);
const listContainer = document.getElementById("left-col");
let optionsP = document.createElement("p");
let h1 = document.createElement("h1");
listContainer.innerHTML = "";


const locationTerm = localStorage.getItem("location")

//Render list to the ui

optionsP.innerHTML = `${parsedResultItems.results.length} Options`;
h1.innerHTML = `Reommended Places IN ${locationTerm}`;
listContainer.append(optionsP);
listContainer.append(h1);
renderDataToUI(parsedResultItems.results);

function renderDataToUI(dataList) {
  dataList.forEach((item) => {
    let housediv = document.createElement("div");
    housediv.className = "house";
    housediv.innerHTML = `<div class="house-img">
                    <a href="/AirBnB/house.html"><img src="${item.images[0]}"/></a>
                </div>
                <div class="house-info">
                    <p>Property in ${locationTerm}</p>
                    <h3>${item.name}</h3>
                    <p>${item.bedrooms} Bedroom / ${item.bathrooms} Bathroom /${item.previewAmenities[0]} / ${item.previewAmenities[1]}</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <div class="house-price">
                        <p>${item.persons} Guest</p>
                        <h4>$ ${item.price.total} <span>/ day</span></h4>
                    </div>
                </div>`;
    housediv.addEventListener("click", () => {

      localStorage.setItem("houseItem", `${JSON.stringify(item)}`);
      redirectPage('house.html');
    });
    listContainer.append(housediv);
  });
}

// --------------map (not complete)-----------------
// Assuming you have a Google Map instance created and stored in a variable 'map'


// const map = new google.maps.Map(document.getElementById('map'), {
//   center: { lat: 37.7749, lng: -122.4194 }, // Example center coordinates
//   zoom: 10, // Example zoom level
// });

// // Assuming you have the geolocation coordinates in variables 'latitude' and 'longitude'
// const latitude = 37.7749; // Example latitude
// const longitude = -122.4194; // Example longitude

// // Create a marker and set its position
// const marker = new google.maps.Marker({
//   position: { lat: latitude, lng: longitude },
//   map: map, // Specify the map where you want to add the marker
//   title: 'Marker Title', // Optional title for the marker
// });


// You can customize the marker icon if needed
// marker.setIcon('custom-icon.png'); // Example custom icon
