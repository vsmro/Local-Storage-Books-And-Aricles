// DOCUMENT READY START
$(document).ready( function() {
// OPEN MODAL FOR ADD BOOK
    $('#addBook').on('shown.bs.modal', function () {
        $('#book').trigger('focus')
});
// OPEN MODAL FOR ADD ARTICLE
    $('#addArticle').on('shown.bs.modal', function () {
        $('#article').trigger('focus')
});
// SHOW DETAILS BUTTON$
//    $('.titles').hover( function () {
//         $(this).find('.buttonDetails').css({'display': 'block'});
//    }, function() {
//        $(this).find('.buttonDetails').hide();
//    });

});



