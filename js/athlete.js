// Select all images on the page
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        console.log("trigerred")
      this.onerror = null; // Prevents infinite loop if default image missing
      this.src = '../images/profiles/default_image.jpg';
      this.parentElement.href = '../images/profiles/default_image.jpg';
      this.alt = "Default Athlete Image"
    };
  });
  