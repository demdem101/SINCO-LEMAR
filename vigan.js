const additionalPackages = [
  {
    img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/58/a4/4f5d926a470151ae138d941b697f3036b603f8d37725ba815a5444e70c57.jpeg",
    title: "Paradores de Vigan",
    text: "Close to Vigan City Convention Center, Family-Friendly Amenities ",
    time: "7am/6pm",
    pax: "15",
    location: "Philippines",
    reviews: 30,
    buttonLink: "/html/ParadoresdeVigan.html"  // Path for Taal Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/df/d7/4a7fda9ae6597b5f12a9c457191dfe95c2a797eea8e771e1241cf1fb4d89.jpeg",
    title: "Hotel Veneto De Vigan",
    text: "Hotel Veneto de Vigan Annex offers top-notch services and amenities,",
    time: "7am/6pm",
    pax: "12",
    location: "Philippines",
    reviews: 50,
    buttonLink: "/html/Hotel Veneto De Vigan.html"  // Path for Kawasan Falls
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/73/85/2d0f66d4345f119bf55ae1cedd63b93fd47fd97521d9778371b83e02f84c.jpeg",
    title: "Ciudad Fernandina Hotel",
    text: "Beautiful hotel design, Explore Vigan's Historical Charm ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 45,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/cb/b4/2ef20d006f0d3e1cfee0ba7975392daca8a92c1329865197b852c1653903.jpeg",
    title: "RedDoorz Hostel @ Deomar Hometel & Farm Cafe Ilocos Sur",
    text: "At RedDoorz Hostel @ Deomar Hometel and Farm Cafe Vigan Ilocos  ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 95,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/4d/00/ce6a52001fbfa40b2fc4d5a43e661e4a7895e8c8facc397e1f0081ead1ce.jpeg",
    title: "Regency Hotel de Vigan",
    text: "Regency Hotel de Vigan offers top-notch services and amenities, ensuring guests experience utmost comfort ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 150,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/c5/bc/cc0dab1c286211e96409994fb800e7309c2eec9e0e8ba23ef1c7442c2ffc.jpeg",
    title: "Hotel Felicidad",
    text: "Experience an abundance of unparalleled facilities and features at Hotel Felicidad.",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 100,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/e0/38/a36302444752b2da7b669f1771962a1a047f0c2b4db61f2934f173264179.jpeg",
    title: "Grandpas Inn And Restaurant",
    text: "ZEN Rooms Grandpa's Inn Vigan offers top-notch services and amenities,",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 85,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/31/d4/886b0b279cfb9e286a9d1938f1b9bf143ea6df981c6d1e2b8f817cec8f68.jpeg",
    title: "Metro Vigan Fiesta Garden Hotel",
    text: "Travel in style to the Heritage province of Ilocos Sur and you will find the Metro Vigan Fiesta Garden Hotel. ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 95,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
  },
  {
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/d0/9f/0baa56314967c2caa7cde665f7c12544b0aa1300b17b7ca65a1e4c406a30.jpeg",
    title: "Hotel Lapira",
    text: "Hotel Lapira offers top-notch services and amenities. ",
    time: "7am/6pm",
    pax: "8",
    location: "Philippines",
    reviews: 160,
    buttonLink: "/html/Ciudad Fernandina Hotel.html"  // Path for Mayon Volcano
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
          <button class="btn btn-secondary" >See more</button>
        </div>
      </div>
    `;
    packageList.appendChild(li);
  });
  viewMoreBtn.style.display = "none"; // Hide the button after loading
});
