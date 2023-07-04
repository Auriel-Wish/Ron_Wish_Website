$(document).ready(function(){
    $('.p_holder').hide();
    $("#h1").click(function(){
        slider(1);
    });
    $("#h2").click(function(){
        slider(2);
    });
    $("#h3").click(function(){
        slider(3);
    });
});

function slider(curr_num) {
    currPart = '#part' + curr_num;
    currI = 'i' + curr_num;
    $(currPart).slideToggle();
    if (document.getElementById(currI).style.transform == 'rotate(180deg)') {
        document.getElementById(currI).style.transform = 'rotate(0deg)';
    }
    else { 
        document.getElementById(currI).style.transform = 'rotate(180deg)';
    }
}