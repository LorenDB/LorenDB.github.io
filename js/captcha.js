var a = Math.ceil(Math.random() * 20);
var b = Math.ceil(Math.random() * 20);
var opNum = Math.ceil(Math.random() * 4);
var op;
var add = ["+", "plus", "added to"];
var sub = ["-", "minus", "when you subtract"];
var times = ["*", "times", "multiplied by"];
var divide = ["/", "over", "divided by"];
function getVarSetup(x, y, z)
{
    if (z == 1) op = add[Math.ceil(Math.random() * 3) - 1];
    if (z == 2) {
        if (a < b) {
            var temp = a;
            a = b;
            b = temp;
        }
        op = sub[Math.ceil(Math.random() * 3) - 1];
    }
    if (z == 3) op = times[Math.ceil(Math.random() * 3) - 1];
    if (z == 4) {
        a = x * y;
        op = divide[Math.ceil(Math.random() * 3) - 1];
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
var p1 = "c"; var p2 = "rt@g"; var p3 = "uter"; var p4 = 'iex'; var p5 = "l."; var p6 = "p"; var p7 = 'mai'; var p8 = 'om';
function DrawBotBoot()
{
    getVarSetup(a, b, opNum);
    var form = document.getElementById("captchaForm");
    form.innerHTML = "What is "+ a + ' ' + op + ' ' + b +"? <input id='BotBootInput' type='text' maxlength='2' size='2'/>"
        + " <input id='Button1' type='button' value='Check' onclick='ValidBotBoot();'/>";
}    
function ValidBotBoot()
{
    var d = document.getElementById('BotBootInput').value;
    if (checkInput(d)) {
        document.getElementById('captchaForm').innerHTML += " Success!";
        setTimeout(renav, 500);
    }
    else {
        document.getElementById('captchaForm').innerHTML += " Invalid answer.";
        setTimeout(refresh, 500);
    }
}
function renav()
{
    window.location.href = "mailto:" + p1 + p8 + p6 + p3 + 'sem' + p4 + p6 + 'e' + p2 + p7 + p5 + p1 + p8;
}
function refresh()
{
    document.location.reload();
}

window.onload = function() {
    document.getElementById("menu").style.left = "-120%";
    document.getElementById("siteCoverForMenu").style.left = "-120%";
    DrawBotBoot();
    initGlowTheme();
};