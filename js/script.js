document.addEventListener('DOMContentLoaded', function () {
    let scrollPosition = window.scrollY;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      const scrollDifference = newScrollPosition - scrollPosition;

      document.getElementById('image1').style.transform = `translateY(${scrollDifference * 0.5}px)`;
      document.getElementById('image2').style.transform = `translateY(${scrollDifference * 0.8}px)`;
      document.getElementById('image3').style.transform = `translateY(${scrollDifference * 0.8}px)`;
      document.getElementById('image4').style.transform = `translateY(${scrollDifference * 0.8}px)`;
      document.getElementById('image5').style.transform = `translateY(${scrollDifference * 0.8}px)`;
      document.getElementById('image6').style.transform = `translateY(${scrollDifference * 0.8}px)`;
      // Adjust the multiplier (0.5) to control the scrolling speed

      scrollPosition = newScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);
  });