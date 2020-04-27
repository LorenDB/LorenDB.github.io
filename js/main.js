window.onload = function() {
    document.getElementById("menu").style.left = "-120%";
    document.getElementById("siteCoverForMenu").style.left = "-120%";
    document.getElementById("date").innerHTML = Date.getFullYear();
    initGlowTheme();
};
function toggleMenu()
{
    var menu = document.getElementById("menu");
    if (menu.style.left == "-120%")
        menu.style.left = "0px";
    else menu.style.left = "-120%";
    var cover = document.getElementById("siteCoverForMenu");
    if (cover.style.left == "-120%")
        cover.style.left = "0px";
    else cover.style.left = "-120%";
}
