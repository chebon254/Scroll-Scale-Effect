document.addEventListener('DOMContentLoaded', function () {
    let scrollPosition = window.scrollY;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      const scrollDifference = newScrollPosition - scrollPosition;

      document.getElementById('image1').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      document.getElementById('image2').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      document.getElementById('image3').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      document.getElementById('image4').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      document.getElementById('image5').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      document.getElementById('image6').style.transform = `translateY(${scrollDifference * 1.8}px)`;
      // Adjust the multiplier (0.5) to control the scrolling speed

      scrollPosition = newScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);
  });


   // Get all elements with the class 'card'
   const cards = document.querySelectorAll('.card');

   // Function to add the 'hovered' class
   function addHoverClass() {
     this.classList.add('card-hover');
   }
 
   // Function to remove the 'hovered' class
   function removeHoverClass() {
     this.classList.remove('card-hover');
   }
 
   // Add event listeners to each card
   cards.forEach(card => {
     card.addEventListener('mouseover', addHoverClass);
     card.addEventListener('mouseout', removeHoverClass);
   });