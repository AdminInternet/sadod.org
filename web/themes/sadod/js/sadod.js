let mb = document.getElementById('menu-button');
if(mb) {
	mb.onclick = function () { jQuery('#block-sadod-main-menu').slideToggle(); }
}

// nav for touchscreens
let fingerblast1;
jQuery('ul.menu li').on('touchstart',function (e) {
	fingerblast1 = Math.round(e.originalEvent.changedTouches[0].pageY);
});
jQuery('ul.menu li').on('touchend', function (f) {
	let fingerblast2 = Math.round(f.originalEvent.changedTouches[0].pageY);
	if(fingerblast2 !== fingerblast1) {
		// user scrolled, do not register a tap
	} else { // just a tap
		f.stopPropagation(); // ignore tap event on parents
		if(!this.querySelector('ul')) { // if no submenu
			// will go to link as expected
		} else { // has children
			if(this.querySelector('ul').style.display != 'block') { // submenu is closed
				f.preventDefault(); // don't go to page
				jQuery(this).siblings('li').children('ul').slideUp();
				jQuery(this).children('ul').slideToggle(); // slide open instead
			} else { // submenu is open
				// will go to link as expected
			}
		}
	}
});

// carets
jQuery('.menu--main > ul.menu > li').has('> ul').children('a').append('<span class="caret down">▾</span>');
jQuery('.menu--main > ul.menu > li').has('> ul').children('span').append('<span class="caret down">▾</span>');
jQuery('ul.menu > li > ul > li').has('> ul').children('a').append('<span class="caret side">›</span>');

let fi1 = document.getElementById('frontimage1');
if(fi1) {
	// rotating images front page
	const frontimage1s = [
		'/themes/sadod/images/died1.jpeg',
		'/themes/sadod/images/died2.jpeg',
		'/themes/sadod/images/died3.jpeg'
	];
	const frontimage2s = [
		'/themes/sadod/images/front1.jpeg',
		'/themes/sadod/images/front2.jpeg',
		'/themes/sadod/images/front3.png'
	];
	const frontimage3s = [
		'/themes/sadod/images/recovery1.jpeg',
		'/themes/sadod/images/recovery2.jpeg',
		'/themes/sadod/images/recovery3.jpeg'
	];
	fi1.src = frontimage1s[Math.floor(Math.random()*3)];
	document.getElementById('frontimage2').src = frontimage2s[Math.floor(Math.random()*3)];
	document.getElementById('frontimage3').src = frontimage3s[Math.floor(Math.random()*3)];
}

document.querySelectorAll('.address-line1').forEach(span=>{
	if(span.innerText.trim() == '?') { span.remove(); }
});

console.log("Hello there");