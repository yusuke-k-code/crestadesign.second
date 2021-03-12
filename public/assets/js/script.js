/* -------------------------
ドロワーメニュー 
------------------------- */
$(function () {
    $('#js-drawer__btn').on('click', function () {
        $(this).toggleClass('open');
        $('#js-drawer__overlay, #js-drawer').toggleClass('open');
    });
    $('#js-drawer__overlay').on('click', function () {
        $(this).removeClass('open');
        $('#js-drawer__btn, #js-drawer').removeClass('open');
    });
    $('.drawer__link').on('click', function () {
        $('#js-drawer__btn, #js-drawer__overlay, #js-drawer').removeClass('open');
    });
});

/* -------------------------
FV過ぎるとヘッダー背景色変更
------------------------- */
$(function () {
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        var fvHeight = $('#js-fv').height();
        var headerHeight = $('#js-header').height();

        if(fvHeight - headerHeight < scroll) {
            $('#js-header').addClass('is-active');
        } else {
            $('#js-header').removeClass('is-active');
        }
    })
});

/* -------------------------
スライダー
------------------------- */
var slider1 = new Swiper('.swiper-container', {
    effect: 'fade',
    speed: 2000,
    loop: true,

    autoplay: {
        delay: 2500,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})

/* -------------------------
スムーススクロール
------------------------- */
$(function () {
    $('a[href ^= "#"]').on('click', function () {
        var header = $('.header').innerHeight();
        var speed = 500;
        var id = $(this).attr('href');
        var target = $("#" === id ? 'html' : id);
        var position = $(target).offset().top - header;
        $('html, body').animate({scrollTop:position}, speed);
        return false;
    });
});

/* -------------------------
FVタイトルのフェードイン
------------------------- */
$(window).on('load', function() {
    $('.fadeIn-fv').addClass('is-active');
});

/* -------------------------
フェードイン｜上下左右
------------------------- */
$(function () {
    $(window).on('scroll', function () {
        $(".fadeIn, .fadeIn-top, .fadeIn-under, .fadeIn-right, .fadeIn-left").each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).addClass('is-active');
            }
        });
    });
});

/* -------------------------
Googleフォームの非同期処理
------------------------- */
var $form = $('#js-form');
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                // 送信に成功した時の処理
                $form.slideUp();
                $('#js-success, #js-backBtn').slideDown();
            },
            200: function () {
                // 送信に失敗した時の処理
                $form.slideUp();
                $('#js-error, #js-backBtn').slideDown();
            }
        }
    });
    e.preventDefault();
});

/* -------------------------
必須項目入力後に送信ボタン反転
------------------------- */
var $submit = $('#js-submit');
$submit.prop('disabled', true);
$('#js-form input, #js-form textarea').on('change', function () {
    if(
        $('input:checked').length > 0 &&
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="tel"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form textarea').val() !== ""
    ) {
        $submit.prop('disabled', false);
        $submit.addClass('is-active');
    } else {
        $submit.prop('disabled', true);
        $submit.removeClass('is-active');
    }
});

/* -------------------------
TOPのフローティング
------------------------- */
$(function () {
    $('#js-toTop').hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('#js-toTop').fadeIn();
        } else {
            $('#js-toTop').fadeOut();
        }
    });

    $('#js-toTop').on('click', function () {
        $('body, html').animate({scrollTop: 0}, 500);
    });
    return false;
});