document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const paginationItems = document.querySelectorAll('.pagination-item');
  
    let currentIndex = 0;
  
    function showItem(index) {
      itemsContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function updatePagination(index) {
      paginationItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    prevButton.addEventListener('click', function(event) {
      event.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
      updatePagination(currentIndex);
    });
  
    nextButton.addEventListener('click', function(event) {
      event.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
      updatePagination(currentIndex);
    });
  
    paginationItems.forEach((item, index) => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = index;
        showItem(currentIndex);
        updatePagination(currentIndex);
      });
    });
  });
  