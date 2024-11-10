// Initialize MixItUp on the container
var containerEl = document.querySelector('.list');
var mixer = mixitup(containerEl, {
    selectors: {
        target: 'li'
    },
    controls: {
        scope: 'local' // Use local controls for filtering
    }
});

// Optionally, link the buttons to the filtering actions
var filterButtons = document.querySelectorAll('.control');
filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var filterValue = this.getAttribute('data-filter');
        mixer.filter(filterValue); // Apply filter based on the button clicked
    });
});
