function openNav() {
    $('.drop_btn').hide();
    document.getElementById("mobile_menu").style.width = "100%";
    setTimeout(() => {
        $('.drop_btn').show();
    }, 301);
    
}
function closeNav() {
    document.getElementById("mobile_menu").style.width = "0";
    setTimeout(() => {
        $('.drop_btn').hide();
    }, 10);
}