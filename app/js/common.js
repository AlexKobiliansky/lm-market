$(document).ready(function(){

    $('.lm-placement-select').styler();

    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    $('.lm-index-intro-slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        items: 1,
        navSpeed: 700,
        dotsSpeed: 700,
        autoplaySpeed: 700,
        autoplayTimeout: 8000,
        autoplay: true,
        navText: ["",""]
    });


    $('.lm-index-populars-slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 25,
        dots: true,
        items: 4,
        navSpeed: 700,
        dotsSpeed: 700,
        navText: ["",""],
        autoWidth: false,
        responsive: {
            0: {
                autoWidth: true,
                nav: false,
                dots: false,
                margin: 10
            },
            480: {
                items: 2,
                autoWidth: false
            },
            768: {
                items: 3
            },
            1260: {
                items: 4
            }
        }
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
