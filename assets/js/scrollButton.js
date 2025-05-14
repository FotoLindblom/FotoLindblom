document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('filter-container');
    const scrollLeftButton = document.getElementById('scrollLeftButton');
    const scrollRightButton = document.getElementById('scrollRightButton');
  
    function updateButtonVisibility() {
      const isOverflowing = scrollContainer.scrollWidth > scrollContainer.clientWidth;
  
      if (isOverflowing) {
        scrollLeftButton.style.display = 'flex';
        scrollRightButton.style.display = 'flex';
        scrollContainer.style.padding = "0 50px 0 40px";

      } else {
        scrollLeftButton.style.display = 'none';
        scrollRightButton.style.display = 'none';
        scrollContainer.style.padding = "0";
      }
      console.log('updateButtonVisibility')
    }
  
    function scrollLeftAction() {
        scrollContainer.scrollBy({
            left: -1*(scrollContainer.clientWidth/3), // Adjust the scroll distance
            behavior: 'smooth',
        });
    }
    
    function scrollRightAction() {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth/3, // Adjust the scroll distance
            behavior: 'smooth',
        });
    }
  
    updateButtonVisibility();
  
    window.addEventListener('resize', updateButtonVisibility);
  
    window.scrollLeftAction = scrollLeftAction;
    window.scrollRightAction = scrollRightAction;
    window.updateButtonVisibility = updateButtonVisibility;
  });