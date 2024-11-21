const destinations = [
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipNKKDIIJlHffUfCMyBM2tm8IYPbUMhyMa8_2StG=w675-h390-n-k-no",
      title: "Davao",
      text: "Known for its natural parks, friendly locals, and as the home of Mount Apo, the highest peak in the Philippines.",
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipPxjF6Dz3wS7pNanPLw7whN-rtI5BWXmQtGfVLf=w675-h390-n-k-no",
      title: "Vigan",
      text: "A well-preserved Spanish colonial town and UNESCO World Heritage Site, famous for its cobblestone streets and heritage houses.",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQQ6CrGF5ZPvtKI0OK5XC-L2neENzhmS2Fg1oZdLairPyY4uNIWXKJ-T8i9cnTZd1s3hQxg1XWXeCHirfGEFzyjZZiFWOAtzQwQTw-HBQ",
      title: "Palawan",
      text: "Renowned for its beautiful islands, clear blue waters, and diverse marine life, including the Puerto Princesa Underground River.",
    },
  ];

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const popularList = document.getElementById("popularList");

  loadMoreBtn.addEventListener("click", () => {
    destinations.forEach(destination => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="popular-card">
          <figure class="card-img">
            <img src="${destination.img}" alt="${destination.title}" loading="lazy">
          </figure>
          <div class="card-content">
            <div class="card-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <h3 class="h3 card-title"><a href="#">${destination.title}</a></h3>
            <p class="card-text">${destination.text}</p>
          </div>
        </div>
      `;
      popularList.appendChild(li);
    });
    loadMoreBtn.style.display = "none"; // Hide the button after loading more destinations
  });