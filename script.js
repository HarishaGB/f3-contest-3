// https://www.figma.com/file/QOCWgizbc2sBwnC7onGAQO/Airbnb---Home%2C-Search%2C-and-Listing-Pages-(Community)?type=design&node-id=0-1&mode=design

//Elements of DOM
const searchByLocationbtn = document.getElementById("form_btn");

//Functions=>

//function for Search by Location=>
const searchByLocation = async () => {
  // main: location, checkin, checkout, adults
  // optional: children, infants, pets, page, currency
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b98731217msh38a276ca44e58efp1a5f32jsn8dfe9521993a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
};
const calender = async () => {
  // main: room_id
  // optional: currency, year, month ,count
  const url =
    "https://airbnb13.p.rapidapi.com/calendar?room_id=18951965&currency=USD&year=2023&month=12&count=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b98731217msh38a276ca44e58efp1a5f32jsn8dfe9521993a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
};

const autoComplete = async () => {
  // main: query
  const url = "https://airbnb13.p.rapidapi.com/autocomplete?query=paris";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b98731217msh38a276ca44e58efp1a5f32jsn8dfe9521993a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
};

//Search by Geo Coordinates =>
const searchByGeoCoordinates = async () => {
  // main: ne_lat, ne_lng, sw_lat, sw_lng, checkin, checkout, adults
  // optional: children, infants, pets, page, currency
  const url =
    "https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2023-09-15&checkout=2023-09-16&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b98731217msh38a276ca44e58efp1a5f32jsn8dfe9521993a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
};

//Redirecting to another Page

function redirectPage(pageAddress) {
  window.location.href = `${pageAddress}`;
}

//All Event Listeners

searchByLocationbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const locationTerm = document.getElementById("location").value;
  const checkinTerm = document.getElementById("checkin").value;
  const checkoutTerm = document.getElementById("checkout").value;
  const guestsTerm = document.getElementById("guests").value;
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${locationTerm}&checkin=${checkinTerm}&checkout=${checkoutTerm}&adults=${guestsTerm}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b98731217msh38a276ca44e58efp1a5f32jsn8dfe9521993a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    localStorage.setItem("listingItems", JSON.stringify(result));
    localStorage.setItem("location", `${JSON.stringify(locationTerm)}`);
    redirectPage('listing.html');
  } catch (error) {
    console.error(error);
  }
});
