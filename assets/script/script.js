


var bpAnimHeight = [];

$(document).ready(function () {
    
    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scrollPosition > windowHeight) {
            $('#btnGoTop').removeClass('d-none');
        } else {
            $('#btnGoTop').addClass('d-none');
        }

        bpAnimHeight.forEach(function (slid) {
            if (slid.offsetTop >= scrollPosition && slid.offsetTop <= scrollPosition + windowHeight) {
                if ($(slid.elem)) {
                    const classAnim = $(slid.elem).attr('aria-anim');
                    if (!$(slid.elem).hasClass(classAnim)) { 
                        $(slid.elem).addClass(classAnim);
                    }
                }
            } else {
                if ($(slid.elem)) {
                    const classAnim = $(slid.elem).attr('aria-anim');
                    $(slid.elem).removeClass(classAnim);
                }
            }
        });
    });

    $('.custom-anim').each(function () {
        const offset = $(this).offset();
        bpAnimHeight.push({ offsetTop: offset.top, elem: this });
    });     

});


