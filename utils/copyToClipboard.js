function moveToClipboard(text) {
	var elem = document.createElement('textarea');
	document.body.appendChild(elem);

	elem.value = text;
	elem.select();

	document.execCommand('copy');
	document.body.removeChild(elem);
}
