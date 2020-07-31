$(document).ready(function() {

    function move (e, obj) {
        var progress = e.pageX - obj.offset().left;
        var rating = progress * 5 / $('.stars').width();
        obj.next().width(progress);
        var d = rating - Math.floor(rating), r;
        if (d<=1/3) r =  Math.floor(rating);
        else if (d<=2/3) r = Math.floor(rating) + 0.5;
        else r = Math.ceil(rating);
        $('#rating_id').text(r);
    }

    $('#rating .stars').on('mousemove', function(e){
        if ($(this).hasClass('fixed')==false) move(e, $(this));
    });

    $('#rating .stars').click (function(e) {
        $(this).toggleClass('fixed');
        move (e, $(this));
        var rt = parseFloat($('#rating_id').text());
        jQuery.post('rating.php', {
            id: $(this).attr('id').substr(3), //id записи
            rating: rt //рейтинг юзера
        }, notice); //по завершении выполнить notice
        $('#rating_id').text('');
    });

    function notice (text) {
        var arr = text.split('#');
        $('#message').fadeOut(500, function() {
            $(this).text(arr[0]); //сообщение
            $('#rating .stars').hide(); //убрать звездочки
            $('#rating #progress_id').hide(); //и фон
            $('#rating_id').text('Всего '+arr[2]+', '+arr[1]+' из 5'); //общий счет
        }).fadeIn(1500);
    }
});


$('.inc').on('click', function(e) {
    e.preventDefault();
    const $input = $(this).closest('div').find('input');
    $input.val(parseInt($input.val(), 10) + 1);
});
$('.dec').on('click', function(e) {
    e.preventDefault();
    const $input = $(this).closest('div').find('input');
    parseInt($input.val(), 10) > 1 && $input.val(parseInt($input.val(), 10) - 1);
});

var divs = document.querySelectorAll('.infoproduct'), i = 0;

down.onclick = function(a) {

    divs[i].style.display="none";

    i = (i < (divs.length - 1))?i+1:0;

    divs[i].style.display="block";

}

up.onclick = function(e) {

    divs[i].style.display="none";

    i = (i > 0)?i-1:divs.length - 1;

    divs[i].style.display="block";

}

function openbox(id) {
    var all = document.querySelectorAll(".descinfo");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
        } else {
            all[i].style.display = 'none';
        }
    }
}



