/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/* Load full page */
$(document).ready(function() {
	$('#fullpage').fullpage();
});