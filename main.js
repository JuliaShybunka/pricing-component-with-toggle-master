$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop('checked') === true) {
            $('.card-title--annual').css('display', 'none');
            $('.card-title--monthly').css('display', 'block');
        } else {
            $('.card-title--monthly').css('display', 'none');
            $('.card-title--annual').css('display', 'block');
        }
    });
    if (window.matchMedia('(max-width: 991px)').matches) {
        $('.pricing-card').removeClass('pricing-card--active');
        $('.card-header').removeClass('card-header--active');
        $('.card-title').removeClass('card-title--active');
        $('.btn').removeClass('btn--active');

    }

})