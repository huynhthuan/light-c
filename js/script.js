$(document).ready(function () {
    $('.home-slide').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
    });

    $('.balance-slide').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
    });

    $('.filter-btn').click(function () {
        let filterUp = $(this).find('.market-filter .filter-up');
        let filterDown = $(this).find('.market-filter .filter-down');
        if (filterUp.hasClass('active')) {
            filterUp.removeClass('active');
            filterDown.toggleClass('active');
        } else {
            filterDown.removeClass('active');
            filterUp.toggleClass('active');
        }
    });

    $('.trade-progress-bar').each(function (index, item) {
        let self = $(item);
        let bgColor = $(item).data('color');
        let bgPercent = $(item).data('percent');

        self.css("background-color", bgColor);
        self.css("width", bgPercent + '%');
    });

    $('#trade-main-slide').slider({
        max: 100,
        min: 25,
        step: 25
    });

    let tradeSlideHandle = $('.trade-panel-slider .ui-slider-handle');

    $( "#trade-main-slide" ).on( "slidechange", function( event, ui ) {
        if(ui.value === 100){
            tradeSlideHandle.css('left', 'calc(100% - 10px)')
        }
    } );
});