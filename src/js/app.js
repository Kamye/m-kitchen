$('#menu').slicknav({
    prependTo:'body'
});

var options = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : ',',
    prefix : '',
    suffix : ''
};
var calc1 = new CountUp("26,4", 0, 26.1, 1, 2.5, options);
calc1.start();

var calc2 = new CountUp("1,34", 0, 1.34, 2, 2.5, options);
calc2.start();

var calc3 = new CountUp("60", 0, 60, 0, 2.5, options);
calc3.start();

var calc4 = new CountUp("40", 0, 40, 0, 2.5, options);
calc4.start();

var calc5 = new CountUp("3", 0, 3, 0, 2.5, options);
calc5.start();

var calc6 = new CountUp("6", 0, 6, 0, 2.5, options);
calc6.start();

var calc7 = new CountUp("65", 0, 65, 0, 2.5, options);
calc7.start();

var calc8 = new CountUp("43", 0, 43, 0, 2.5, options);
calc8.start();

$('.covervid-video').coverVid(1440, 810);

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-46
        }, 500, 'linear', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.nav a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}