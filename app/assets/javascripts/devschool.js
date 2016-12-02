/**
 * Created by sp050281 on 12/2/16.
 */
$('#countdown').countdown('2016/12/29', function(event) {
    $(this).html(event.strftime('%w weeks %d days <br /> %H:%M:%S'));
});
$(document).ready(function(){
    var header = $('#wrapper');

    var backgrounds = new Array(
        'url(/assets/confused.jpg)'
        , 'url(/assets/mac_code.jpeg)'
        , 'url(/assets/try.jpg)'
    );

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 10000);

    header.css('background-image', backgrounds[0]);
});