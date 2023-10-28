
const houseData = JSON.parse(localStorage.getItem("houseItem"));
houseOnUI(houseData);

function houseOnUI(houseDetailsData) {
    const housedetailsdiv = document.getElementById('house-details');
    const lat = houseDetailsData.lat.toFixed(4);
    const lon = houseDetailsData.lng.toFixed(4);
    let houseTitle = document.createElement('div');
    houseTitle.className = 'house-title';
    houseTitle.innerHTML =`<h1>${houseDetailsData.name}</h1>
    <div class="row">
        <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <span>${houseDetailsData.reviewsCount} Reviews</span>
        </div>
        <div>
            <p>Location: ${houseDetailsData.address}</p>
        </div>
    </div>
</div>
<div class="gallery">
    <div class="gallery-img-1"><img src="${houseDetailsData.images[0]}"></div>
    <div><img src="${houseDetailsData.images[1]}"></div>
    <div><img src="${houseDetailsData.images[2]}"></div>
    <div><img src="${houseDetailsData.images[3]}"></div>
    <div><img src="${houseDetailsData.images[4]}"></div>
</div>
<div class="small-details">
    <h2>Entire rental unit hosted by</h2>
    <p>${houseDetailsData.person} guest &nbsp; &nbsp; ${houseDetailsData.beds} beds &nbsp; &nbsp; ${houseDetailsData.bathrooms} bathroom</p>
    <h4>$ ${houseDetailsData.price.total} / day</h4>
</div>
<hr class="line">
<form class="check-form">
    <div>
        <label>Check-in</label>
        <input type="date" placeholder="Add date">
    </div>
    <div>
        <label>Check-out</label>
        <input type="date" placeholder="Add date">
    </div>
    <div class="guest-field">
        <label>Guest</label>
        <input type="number" placeholder="2 guest">
    </div>
    <button type="submit">Check Availability</button>
</form>

<ul class="details-list">
    <li><i class="fas fa-home"></i>Entire Home
        <span>You will have the entire flat for you.</span>
    </li>
    <li><i class="fas fa-paint-brush"></i>Enhanced Clean
        <span>This host has committed to AirBnB's cleaning process.</span>
    </li>
    <li><i class="fas fa-map-marker-alt"></i>Great Location
        <span>90% of recent guests gave the location a 5 star rating.</span>
    </li>
    <li><i class="fas fa-heart"></i>Great Check-in Experience
        <span>100% of recent guests gave the check-in process a 5 star rating.</span>
    </li>
</ul>

<hr class="line">

<p class="home-desc">Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
<hr class="line">
<div class="map">
            <h3>Location on map</h3>
            <iframe src="https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <b>${houseDetailsData.address}</b>
            <p>It's like a home away from home.</p>
        </div>
        <hr class="line">

        <div class="host">
            <img src="images/host.png">
            <div>
                <h2>Hosted by Brandon</h2>
                <p><span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </span>&nbsp; &nbsp; 245 reviews &nbsp; &nbsp; Response rate 100% &nbsp; &nbsp; Response time: 60 min</p>
            </div>
        </div>
        <a href="#" class="contact-host">Contact Host</a>`;
housedetailsdiv.append(houseTitle);
}
