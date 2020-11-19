jQuery(function($) {


    var launch = new Date(2020,11,1,17,00,00);
    var days  = $('#days');;
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');

    setDate();
    function setDate() {
        var now = new Date();
        var s = ((launch.getTime() - now.getTime())/1000) - now.getTimezoneOffset()*60;
        var d = Math.floor(s/86400);
        days.html(d+' Jour'+(d>1?'s':''));
        s -= d*86400;

        var h = Math.floor(s/3600);
        hours.html(h+' Heure'+(h>1?'s':''));
        s -= h*3600;

        var m = Math.floor(s/60);
        minutes.html(m+' Minute'+(m>1?'s':''));
        s -= m*60;

        s = Math.floor(s);
        seconds.html(s+' Seconde'+(s>1?'s':''));

        setTimeout(setDate, 1000);
    }

});