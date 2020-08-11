
$(window).load(function() {
	$("body").fadeIn(250);
});

$(document).ready(function() {
	
	$("#header").html(
		'<h1>' +			
			'<span class="copy_to_clipboard" alt="Click to Copy the Server Address to Your Clipboard"><i class="icon fa-clipboard"></i></span>' +
			'<span class="copy_to_clipboard_target">swishcraft.serverminer.com</span>' +
		'</h1>' +
		'<nav id="nav">' +
			'<ul>' +
				'<li><a href="index.html" title="Home Page">Home</a></li>' +
				'<li><a href="rules.html" title="Please obey the Rules... Don\'t be a Dick">Rules &amp; Code of Conduct</a></li>' +
				'<li><a href="info.html" title="The Story of SwishCraft">Premise &amp; Info</a></li>' +
				'<li><a href="https://www.patreon.com/swishdaddy" target="_blank" title="Dolla dolla bill ya\'ll...Support the Cause!">Patreon</a></li>' +
				
				//'<li><a href="index.html" title="Some pointers that you might find helpful">Lore  &amp; Hints</a></li>' +
				//'<li><a href="index.html" title="Battle is Life!">Arenas &amp; PvP Battle</a></li>' +
				//'<li><a href="index.html" title="Money, Stores and more">Economy</a></li>' +
				//'<li><a href="index.html" title="Notes on Hunger and Thirst, and how to handle them">Hunger &amp; Thirst</a></li>' +
			'</ul>' +
		'</nav>'
	);
	
	$(document).on("click", ".copy_to_clipboard", function() {
		copytoclipboard($(this).parent().find(".copy_to_clipboard_target").html());		
	});
	
});

function copytoclipboard(copytext) {	
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(copytext).select();
	document.execCommand("copy");
	$temp.remove();	
	alert("Server Address Copied! \n\nYou can now paste it in your Minecraft Launcher. \n\n   ** Let's Get It On!**");
};
