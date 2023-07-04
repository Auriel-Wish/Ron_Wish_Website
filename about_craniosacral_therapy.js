$(document).ready(function(){
    if ($(window).width() > 1100) {
        $('.p_holder').hide();
    }
    $("#h1").click(function(){
        slider(1);
    });
    $("#h2").click(function(){
        slider(2);
    });
    $("#h3").click(function(){
        slider(3);
    });
    $("#h4").click(function(){
        slider(4);
    });
});

function slider(curr_num) {
    currP = '#p' + curr_num;
    currI = 'i' + curr_num;
    $(currP).slideToggle();
    if (document.getElementById(currI).style.transform == 'rotate(180deg)') {
        document.getElementById(currI).style.transform = 'rotate(0deg)';
    }
    else { 
        document.getElementById(currI).style.transform = 'rotate(180deg)';
    }
}