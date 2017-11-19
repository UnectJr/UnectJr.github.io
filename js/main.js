$(document).ready(function () {

    /* ParticlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    /* Load full page */
    $('#fullpage').fullpage({
        // Navigation
        menu: '#menu',
        anchors: [
            'showcase',
            'about',
            'services',
            'contributors',
            'contact'
        ],
        //verticalCentered: false,
        loopBottom: true,
        css: false,

        // Scrolling
        scrollingSpeed: 1300,
        controlArrows: true,
        animateAnchor: true,

        lazyLoading: true,

        // Change portfolio font color
        afterLoad: function(anchorLink, index){
            if (index === 4 || index === 5){
                $('.navbar').find('a , span').addClass('black');
            }
        },

        onLeave: function(index, nextIndex, direction){
            if (index === 4 || index === 5){
                $('.navbar').find('a , span').removeClass('black').addClass('white');
            }
        }

    });
    
});