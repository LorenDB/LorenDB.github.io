window.onload = function() {
    document.getElementById("menu").style.left = "-380px";
    document.getElementById("siteCoverForMenu").style.left = "-120%";
    //alert("width: " + window.innerWidth + "\nheight: " + window.innerHeight);
};
function toggleMenu()
{
    var menu = document.getElementById("menu");
    if (menu.style.left == "-380px")
        menu.style.left = "0px";
    else menu.style.left = "-380px";
    var cover = document.getElementById("siteCoverForMenu");
    if (cover.style.left == "-120%")
        cover.style.left = "0px";
    else cover.style.left = "-120%";
}