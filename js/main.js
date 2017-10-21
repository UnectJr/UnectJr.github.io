/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/* Load full page */
$(document).ready(function() {
	$('#fullpage').fullpage({
        // Navigation
        menu: '#menu',
        anchors:[
            'showcase',
            'about',
            'portfolio',
            'contact'
        ],
        verticalCentered: false,
        loopBottom: true,

        // Scrolling
        scrollingSpeed: 1300,
        controlArrows: true,
        animateAnchor: true
    });
});