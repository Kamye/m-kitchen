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

var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 600);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});

$('.covervid-video').coverVid(1440, 810);