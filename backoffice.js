/**
 * Created by arvidhogberg on 15-04-22.
 */
$(document).ready(function(){
    $('.header').click(function(){
        $(this).siblings('.child-'+this.id).toggle('fast');
    });
    $('tr[class^=child-]').hide().children('tr');
});