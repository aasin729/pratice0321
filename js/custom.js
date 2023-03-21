(function($){

    $('.btnMenu').on('click', function(){
        $('nav, section').addClass('on')
    })

    $('#gnb li a').on('click', function(){
        let num = $(this).parent().index()
        $('section > div').eq(num).addClass('on')
        .siblings().removeClass('on')
        $('nav, section').removeClass('on')
        return false
    })


})(jQuery)

