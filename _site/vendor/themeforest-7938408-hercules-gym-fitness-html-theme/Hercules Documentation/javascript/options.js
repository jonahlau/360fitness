/* ================= START SCROOL TOP ================= */
$(document).ready(function() {
    $('.go_top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1200, 'swing');
        return false;
    });

    $('.back_top_button').click(function() {
        var t = $(this);
        var t_target = t.attr('data-target');
        $('body,html').animate({
            scrollTop: t_target ? $(t_target).offset().top : 0
        }, 1200, 'swing');
        return false;
    });

    $('.navbar').scrollspy()
    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh')
    });
});
/* ================= END SCROOL TOP ================= */

/* ================= START IE FIX ================= */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}
/* ================= END IE FIX ================= */

/* ================= START PLACE HOLDER ================= */
$(document).ready(function() {
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
});
/* ================= END PLACE HOLDER ================= */

/* ================= START AFFIX ================= */
$(document).ready(function() {
    $(document.body).scrollspy({
        target: ".tt_menu"
    });
});
/* ================= END AFFIX ================= */