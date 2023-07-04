$(document).ready(function(){
    if ($(window).width() > 1100) {
        $('.story').hide();
        $("#start_pic",).fadeIn();

        $("a").click(function(){
            $('.story').hide();
            for(let i = 1; i < 9; i++) {
                currH = 'h' + i;
                document.getElementById(currH).style.color = 'var(--orange1)';
            }
            var story_sec = document.getElementById('stories_section');
            story_sec.scrollTop = 0;
        });

        $("#h1").click(function(){
            apply_style(1);
        });
        $("#h2").click(function(){
            apply_style(2);
        });
        $("#h3").click(function(){
            apply_style(3);
        });
        $("#h4").click(function(){
            apply_style(4);
        });
        $("#h5").click(function(){
            apply_style(5);
        });
        $("#h6").click(function(){
            apply_style(6);
        });
        $("#h7").click(function(){
            apply_style(7);
        });
        $("#h8").click(function(){
            apply_style(8);
        });
    }
});

function apply_style(numH) {
    currStory = '#story' + numH;
    currH = 'h' + numH;
    $(currStory).fadeIn();
    document.getElementById(currH).style.color = 'var(--orange2)';
}