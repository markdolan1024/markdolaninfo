// Mark Dolan Info Home Page Functions



window.onload = makeMenuBarActive;

function makeMenuBarActive(){

	console.log("get children");
	console.log($("#menu_links").children());


	console.log("window.location.href");
	var href_string = window.location.href;
	console.log(href_string);
	
	console.log("window.location.hostname");
	console.log(window.location.hostname);
	
	console.log("window.location.pathname");
	console.log(window.location.pathname);
	
	console.log("window.location.protocol");
	console.log(window.location.protocol);
	
	console.log("Get index of last / of href_string");
	var slash_index = href_string.lastIndexOf('/');
	
	console.log("Index is");
	console.log(slash_index);
	
	console.log("Slice the original string");
	href_string = href_string.slice(slash_index);
	console.log(href_string);
}


