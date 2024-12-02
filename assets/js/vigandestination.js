const destinations = [
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/ca/38/f5/hidden-garden.jpg?w=500&h=-1&s=1",
      title: "hidden garden",
      text: "Ilocos cuisine and the garden is a perfect place to roam around and discover different kinds of plants and flowers.",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/84/aa/cb/pagburnayan.jpg?w=500&h=400&s=1",
      title: "pagburnayan",
      text: "Pagburnayan in Vigan is famous for its traditional pottery, showcasing the artistry of creating jars using ancient techniques."
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/55/a7/14/fountain.jpg?w=500&h=400&s=1",
      title: "Plaza Salcedo",
      text: "Plaza Salcedo in Vigan is a historic square known for its beautiful fountain and cultural significance.",
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