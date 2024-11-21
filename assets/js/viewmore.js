const additionalPackages = [
    {
      img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQvoFNCxe64KAezSw9jIWkyR7eRHhmxrtBRHYnz-IRd-nuJkp2QDRFGYn3DP-yGtrLlwkevs5D0cHyp_z1c0JePsEyhVGqmalIo2zVfPA",
      title: "Taal Volcano",
      text: "Volcanoes",
      time: "7am/6pm",
      pax: "15",
      location: "Philippines",
      reviews: 30,
      buttonLink: "html/Taal Volcano.html"  // Path for Taal Volcano
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipM9fZKm7vRybb2St7qYjJclZYdmx8bopDUpWIQX=w270-h156-n-k-no",
      title: "Kawasan Falls",
      text: "Waterfalls",
      time: "7am/6pm",
      pax: "12",
      location: "Philippines",
      reviews: 50,
      buttonLink: "html/KawasanFalls.html"  // Path for Kawasan Falls
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSPl_LHKLSCgPq8q2vEplmMGsD0-tBmj6OoAGCh_Zoqs6abqhC8ygl9_kq1pPPohz_MfSZh4AUyftI9F_mH2LmlLVQPkMhMum061whnAlU",
      title: "Mayon Volcano",
      text: "Volcanoes",
      time: "7am/6pm",
      pax: "8",
      location: "Philippines",
      reviews: 45,
      buttonLink: "html/MayonVolcano.html"  // Path for Mayon Volcano
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
  