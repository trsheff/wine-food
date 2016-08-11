/**
 * Created by 1 on 08.08.2016.
 */
$(document).ready(function () {
    // show all sliders
    $('.slider ').show();

    $('.bxslider').bxSlider();
    $('.news-slider').bxSlider({pager: false});


    $('.slider1').bxSlider({
        slideWidth: 300,
        slideMargin: 30,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        pager: false
    });

    $('.bestsellers-slider').bxSlider({
        slideWidth: 400,
        slideMargin: 25,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        pager: false
    });

    /**
     * launch first tab
     */
    $('.active .slider-tab').bxSlider({
        slideWidth: 400,
        slideMargin: 25,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        pager: false
    });

    /**
     * custom tabs
     */
    $(".menu-tab").click(function () {
        var tab_id = $(this).attr('data-tab');
        $(".tab-test .menu-tab").removeClass("active"); //удаляем класс во всех вкладках
        $(".content-test .content-tab").removeClass("active");
        $(this).addClass("active"); //добавляем класс текущей (нажатой)
        $("." + tab_id).addClass('active').find('.slider-tab').bxSlider({
            slideWidth: 400,
            slideMargin: 25,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            pager: false
        });
    });

    $(window).scroll(function (e) {
        if ($('body')[0].scrollTop > 1000) {
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
        }
    })
});

var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

link.addEventListener("click" , function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

var close = document.querySelector(".modal-content-close");

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");

});

