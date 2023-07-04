$(document).ready(function(){
    // set_heights_temp(3);
    
    if ($(window).width() <= 600) {
        text = 'Dr. Ron Wish is the best group leader I have ever known. He has an amazing ability to create nets of safety while gently and kindly nudging participants to look into the mirror of their own perceptions—which melts open limiting stuck points the person never knew existed. It is a unique kind of Craniosacral Therapy/ Somato-Emotional Release work that is only effective because Ron is always willing to be vulnerable as he seeks personal growth for himself.<br><p>- Mary Beth White, MS, NP, APHN-BC, HWNC-BC</p>'
        document.getElementById("change_quote_to_favorite").innerHTML = text;
        sacred_journey = document.getElementById("sacred_journey")
        sacred_journey.innerHTML += '<br><h5>Click Photos to learn more about<br>the GRCTI experience</h5>'
    }

    $(window).on('load', function() {
        set_heights(3);
    });
});

function set_heights(end){
    for (var i = 1; i < end + 1; i++) {
        img_id = "#img_holder" + i
        traning_id = "training_section" + i
        var get_height = $(img_id).height();
        document.getElementById(traning_id).style.height = Math.floor(.95*get_height) + "px";
    }
}