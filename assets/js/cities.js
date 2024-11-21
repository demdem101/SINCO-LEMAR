// List of popular cities in the Philippines with corresponding HTML pages
const cities = {
  "Vigan": "vigan.html",
  "Manila": "manila.html",
  "Quezon City": "quezon-city.html",
  "Cebu City": "cebu-city.html",
  "Davao City": "davao.html",
  "Makati": "makati.html",
  "Taguig": "taguig.html",
  "Pasig": "pasig.html",
  "Cagayan de Oro": "cagayan-de-oro.html",
  "Baguio": "baguio.html",
  "Iloilo City": "iloilo-city.html",
  "Zamboanga City": "zamboanga-city.html",
  "Pasay": "pasay.html",
  "Mandaluyong": "mandaluyong.html",
  "Parañaque": "paranaque.html",
  "Batangas City": "batangas-city.html"
};

// Reference elements
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Handle search input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = ""; // Clear previous results

  if (query) {
    // Filter cities based on query
    const filteredCities = Object.keys(cities).filter((city) =>
      city.toLowerCase().includes(query)
    );

    if (filteredCities.length > 0) {
      searchResults.style.display = "block"; // Show results container
      filteredCities.forEach((city) => {
        const resultItem = document.createElement("a");
        resultItem.textContent = city;
        resultItem.href = cities[city]; // Redirect to the corresponding city page
        resultItem.style.margin = "5px 0";
        resultItem.style.color = "#000";
        resultItem.style.textDecoration = "none"; // Remove underline
        resultItem.style.cursor = "pointer"; // Make it clickable
        resultItem.style.padding = "5px"; // Add some padding for better clickable area
        
        // Optionally, add hover effect to the clickable city name
        resultItem.addEventListener("mouseover", () => {
          resultItem.style.backgroundColor = "#e0e0e0";
        });
        resultItem.addEventListener("mouseout", () => {
          resultItem.style.backgroundColor = "transparent";
        });

        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.style.display = "block";
      searchResults.innerHTML = "<p style='color: #666; text-align: center;'>No results found</p>";
    }
  } else {
    searchResults.style.display = "none"; // Hide results if input is empty
  }
});