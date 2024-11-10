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
  
  // Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Initialize lightbox here and disable animations.
    lightbox.option({
        fadeDuration: 0,       // Set fade duration to 0 if it exists
        resizeDuration: 0,     // Set resize duration to 0 if it exists
        showImageNumberLabel: false, // Disable any other animations if the option is available
    });
}
