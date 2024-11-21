const additionalPackages = [
  {
    img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/58/a4/4f5d926a470151ae138d941b697f3036b603f8d37725ba815a5444e70c57.jpeg",
    title: "Paradores de Vigan",
    text: "Close to Vigan City Convention Center, Family-Friendly Amenities ",
    time: "7am/6pm",
    pax: "15",
    location: "Philippines",
    reviews: 30,
    buttonLink: "Paradores de Vigan.html"  // Path for Taal Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/df/d7/4a7fda9ae6597b5f12a9c457191dfe95c2a797eea8e771e1241cf1fb4d89.jpeg",
    title: "Hotel Veneto De Vigan",
    text: "Hotel Veneto de Vigan Annex offers top-notch services and amenities,",
    time: "7am/6pm",
    pax: "12",
    location: "Philippines",
    reviews: 50,
    buttonLink: "Hotel Veneto De Vigan.html"  // Path for Kawasan Falls
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/73/85/2d0f66d4345f119bf55ae1cedd63b93fd47fd97521d9778371b83e02f84c.jpeg",
    title: "Ciudad Fernandina Hotel",
    text: "Beautiful hotel design, Explore Vigan's Historical Charm ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 45,
    buttonLink: "Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
];

const viewMoreBtn = document.getElementById("viewMoreBtn");
const packageList = document.getElementById("packageList");

viewMoreBtn.addEventListener("click", () => {
  additionalPackages.forEach(packageItem => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="package-card">
        <figure class="card-banner">
          <img src="${packageItem.img}" alt="${packageItem.title}" loading="lazy">
        </figure>
        <div class="card-content">
          <h3 class="h3 card-title">${packageItem.title}</h3>
          <p class="card-text">${packageItem.text}</p>
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <div class="meta-box">
                <ion-icon name="time"></ion-icon>
                <p class="text">${packageItem.time}</p>
              </div>
            </li>
            <li class="card-meta-item">
              <div class="meta-box">
                <ion-icon name="people"></ion-icon>
                <p class="text">pax: ${packageItem.pax}</p>
              </div>
            </li>
            <li class="card-meta-item">
              <div class="meta-box">
                <ion-icon name="location"></ion-icon>
                <p class="text">${packageItem.location}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-price">
          <div class="wrapper">
            <p class="reviews">(${packageItem.reviews} reviews)</p>
            <div class="card-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <!-- Direct link to the HTML file -->
          <button class="btn btn-secondary" onclick="window.location.href='${packageItem.buttonLink}';">See more</button>
        </div>
      </div>
    `;
    packageList.appendChild(li);
  });
  viewMoreBtn.style.display = "none"; // Hide the button after loading
});
