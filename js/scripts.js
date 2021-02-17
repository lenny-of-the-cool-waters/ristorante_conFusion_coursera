$(document).ready(function() {
    $('#myCarousel').carousel({ interval:5000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
        
    });
    $('#loginToggle').click(function() {
        $('#loginModal').modal('show');
    });
    $('#reservationToggle').click(function() {
        $('#reservationModal').modal('show');
    });
    $('.close').click(function() {
        $(this).closest('.modal').modal('hide')
    })
});