var a = Math.ceil(Math.random() * 20);
var b = Math.ceil(Math.random() * 20);
var opNum = Math.ceil(Math.random() * 4);
var op;
function getVarSetup(x, y, z)
{
    if (z == 1) op = '+';
    if (z == 2) op = '-';
    if (z == 3) op = '*';
    if (z == 4) {
        a = x * y;
        op = '/';
    }
}
function checkInput(n)
{
    if (opNum == 1) if (n == a + b) return true;
    if (opNum == 2) if (n == a - b) return true;
    if (opNum == 3) if (n == a * b) return true;
    if (opNum == 4) if (n == a / b) return true;
    return false;
}
var p1 = "c"; var p2 = "rt@out"; var p3 = "uter"; var p4 = 'iex'; var p5 = "k."; var p6 = "p"; var p7 = 'loo'; var p8 = 'om';
function DrawBotBoot()
{
    getVarSetup(a, b, opNum);
    var form = document.getElementById("captchaForm");
    form.innerHTML = "What is "+ a + ' ' + op + ' ' + b +"? Calculators are allowed. <input id='BotBootInput' type='text' maxlength='2' size='2'/>"
        + " <input id='Button1' type='button' value='Check' onclick='ValidBotBoot();'/>";
}    
function ValidBotBoot()
{
    var d = document.getElementById('BotBootInput').value;
    if (checkInput(d)) {
        document.getElementById('captchaForm').innerHTML += " Success!";
        setTimeout(renav, 999);
    }
    else {
        document.getElementById('captchaForm').innerHTML += " Invalid answer. <a href='./contact.html'>Click here</a> to try again.";
    }
}
function renav()
{
    window.location.href = "mailto:" + p1 + p8 + p6 + p3 + 'sem' + p4 + p6 + 'e' + p2 + p7 + p5 + p1 + p8;
}

window.onload = function() {
    document.getElementById("menu").style.left = "-120%";
    document.getElementById("siteCoverForMenu").style.left = "-120%";
    DrawBotBoot();
    initGlowTheme();
};