$('#menu').slicknav({
    prependTo:'body'
});

$("#menu, .slicknav_nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
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

$( document ).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.header .video-container video').addClass('fadeIn animated');


    });
}