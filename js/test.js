function checkPosition(){
    // координаты дива
    var div_position = $('#header').offset();
    // отступ сверху
    var div_top = div_position.top;
    // отступ слева
    var div_left = div_position.left;
    // ширина
    var div_width = $('#header').width();
    // высота
    var div_height = $('#header').height();
     
    // проскроллено сверху 
    var top_scroll = $(document).scrollTop();
    // проскроллено слева
    var left_scroll = $(document).scrollLeft();
    // ширина видимой страницы
    var screen_width = $(window).width();
    // высота видимой страницы
    var screen_height = $(window).height();
     
    // координаты углов видимой области
    var see_x1 = left_scroll;
    var see_x2 = screen_width + left_scroll;
    var see_y1 = top_scroll;
    var see_y2 = screen_height + top_scroll;
     
    // координаты углов искомого элемента
    var div_x1 = div_left;
    var div_x2 = div_left + div_height;
    var div_y1 = div_top;
    var div_y2 = div_top + div_width;
     
    // проверка - виден див полностью или нет
    if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
        // если виден
        $('#newhead').hide();
    }else{
        // если не виден
        $('#newhead').show(200);
    }
}
$(document).ready(function () {
    $('.portfolio_menu_list ul li').click(function(){
        $('.portfolio_menu_list ul li:nth-child(1),.portfolio_menu_list ul li:nth-child(2),.portfolio_menu_list ul li:nth-child(3),.portfolio_menu_list ul li:nth-child(4),.portfolio_menu_list ul li:nth-child(5)').removeClass('selected_li');
        $(this).addClass('selected_li');
    });
    $('.portfolio_selected').click(function(){
        $('.s1,.s2,.s3').removeClass('sssect');
        $(this).addClass('sssect');
    });
    $('.s1').click(function(){
        $('.portfolio_projects_point img').attr('src','img/project1.png');
    });
    $('.s2').click(function(){
        $('.portfolio_projects_point img').attr('src','https://colorlib.com/wp/wp-content/uploads/sites/2/pagecloud-drag-and-drop-website-builder.jpg');
    });
    $('.s3').click(function(){
        $('.portfolio_projects_point img').attr('src','https://i.pinimg.com/originals/4d/76/de/4d76de47dc54d51ed73e924e9f2f9a5b.jpg');
    });
    $('.say_man2,.say_man3').hide();
    $('.say_man_photo').click(function(){
        $('.say_man_photo').removeClass('active');
        $(this).addClass('active');
        if($('.mp1').hasClass('active')){
            $('.say_man1').show(200);
            $('.say_man2,.say_man3').hide(200);
        }
        else if($('.mp2').hasClass('active')){
            $('.say_man1,.say_man3').hide(200);
            $('.say_man2').show(200);
        }
        else if($('.mp3').hasClass('active')){
            $('.say_man2,.say_man1').hide(200);
            $('.say_man3').show(200);
        }
    });
    $(document).scroll(function(){
        checkPosition();
    });
    checkPosition();
    $(window).resize(function(){
        checkPosition();
    });
});