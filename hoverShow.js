var cursorX = 0; var cursorY = 0; var aX = 0; var aY = 0;
	function currentCursorPos(e){
		cursorX = e.pageX; cursorY = e.pageY;
	}
	function currentCursorPosDoc(e){
		cursorX = event.clientX; cursorY = event.clientY;
	}
    if(document.all) {
		document.onmousemove = currentCursorPosDoc;
	}
    else {
		document.onmousemove = currentCursorPos;
	}
    function setPosition(display) {
		if(self.pageYOffset) {
			aX = self.pageXOffset;
			aY = self.pageYOffset;
		}
		else if(document.documentElement && document.documentElement.scrollTop) {
			aX = document.documentElement.scrollLeft;
			aY = document.documentElement.scrollTop;
		}
		else if(document.body) {
			aX = document.body.scrollLeft;
			aY = document.body.scrollTop;
		}
		if(document.all) {
			cursorX += aX;
			cursorY += aY;
		}
		display.style.left = (cursorX+10) + "px";
		display.style.top = (cursorY+10) + "px";
    }
    function HideContent(ident) {
		if(ident.length < 1) { return; }
		document.getElementById(ident).style.display = "none";
	}
    function ShowContent(ident) {
		if(ident.length < 1) { return; }
		var tag = document.getElementById(ident);
		setPosition(tag);
		tag.style.display = "block";
    }
	
    function ReverseContentDisplay(ident) {
		if(ident.length < 1) { return; }
		var tag = document.getElementById(ident);
		setPosition(tag);
		if(tag.style.display == "none") {
			tag.style.display = "block"; 
		}
		else {
			tag.style.display = "none";
		}
    }
