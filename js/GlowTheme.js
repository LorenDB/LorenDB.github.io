var boxes;

function initGlowTheme()
{
	initGlowText();
	initGlowButtons();
}

function initGlowButtons()
{
	var buttons;
	buttons = document.getElementsByClassName("glowbutton");
	for (var i = 0; i < buttons.length; ++i)
	{
		buttons[i].style.width = buttons[i].width;
	}
}

function initGlowText()
{
	boxes = document.getElementsByClassName("glowtext");
	for(var i = 0; i < boxes.length; ++i)
	{
		var box = boxes[i];
		var content = box.innerHTML;
		box.innerHTML = '<div class="innerGlowText" contentEditable>' + content + '</div> <div class="glowbutton" onclick="clearGlowText(this)"><span class="imgX"></span></div>';
	}
	boxes = document.getElementsByClassName("innerGlowText");
}

function clearGlowText(e)
{
	e.parentElement.children[0].innerHTML = "";
}
