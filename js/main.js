window.onload = function() {
    document.getElementById("menu").style.left = "-365px";
    document.getElementById("siteCoverForMenu").style.left = "-100%";
    //alert("width: " + window.innerWidth + "\nheight: " + window.innerHeight);
};
function toggleMenu()
{
    var menu = document.getElementById("menu");
    if (menu.style.left == "-365px")
        menu.style.left = "0px";
    else menu.style.left = "-365px";
    var cover = document.getElementById("siteCoverForMenu");
    if (cover.style.left == "-100%")
        cover.style.left = "0px";
    else cover.style.left = "-100%";
}