function nullToBlank(str) {
	return str == null || str == undefined ? "" : str;
}

function notifyError(error) {
	alert(error.description == null ? "システムエラー" : error.description);
	console.error(error);
}