const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const thumbnails = document.getElementById('thumbnails');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    const images = Array.from(galleryItems).map(img => ({
      thumb: img.src,
      full: img.dataset.full
    }));

    // Open modal
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index;
        showModal();
      });
    });

    // Show modal
    function showModal() {
      modal.style.display = 'flex';
      updateModal();
      generateThumbnails();
    }

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Update modal image
    function updateModal() {
      modalImg.src = images[currentIndex].full;
    }

    // Navigate images
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateModal();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateModal();
    });

    // Generate thumbnails
    function generateThumbnails() {
      thumbnails.innerHTML = '';
      images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image.thumb;
        thumb.addEventListener('click', () => {
          currentIndex = index;
          updateModal();
        });
        thumbnails.appendChild(thumb);
      });
    }