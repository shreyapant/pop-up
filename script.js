var btn = false;
$(document).ready(function(){
    $('.clicks').on('click', function() {
        if(!btn){
            $('#box').addClass('show');
            btn = true;
        }
        else{
            $('#box').removeClass('show');
            btn = false;
        }
    });
});

$(document).ready(function(){
    $('.fa-xmark').on('click', function() {
        $('#box').removeClass('show');
        btn = false;
    });
});

$(document).ready(function(){
    $('.submission').on('click', function() {
        $('#box').removeClass('show');
        btn = false;
    });
});