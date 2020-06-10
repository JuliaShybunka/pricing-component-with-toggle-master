$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop('checked') === true) {
            $('.card-title--annual').css('display', 'none');
            $('.card-title--monthly').css('display', 'block');
            console.log('checked');
        } else {
            $('.card-title--monthly').css('display', 'none');
            $('.card-title--annual').css('display', 'block')
            console.log("not")
        }
    });
})