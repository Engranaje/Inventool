/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Lizziecons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'alert-open': '&#xe900;',
		'trashcan-open': '&#xe901;',
		'trashcan': '&#xe902;',
		'alert': '&#xe903;',
		'inbox': '&#xe904;',
		'clock': '&#xe905;',
		'clock-open': '&#xe906;',
		'scheduled': '&#xe907;',
		'sent': '&#xe908;',
		'mail-open': '&#xe909;',
		'mail': '&#xe90a;',
		'label-open': '&#xe90b;',
		'label-alt-open': '&#xe90c;',
		'label-alt': '&#xe90d;',
		'label': '&#xe90e;',
		'arrowrightbold': '&#xe90f;',
		'arrowleftbold': '&#xe910;',
		'arrowdownbold': '&#xe911;',
		'arrowright': '&#xe912;',
		'arrowupbold': '&#xe913;',
		'arrowdown': '&#xe914;',
		'arrowleft': '&#xe915;',
		'arrowup': '&#xe916;',
		'copy-open': '&#xe917;',
		'copy': '&#xe918;',
		'star-open': '&#xe919;',
		'star': '&#xe91a;',
		'clipboard': '&#xe91b;',
		'creditcard-open': '&#xe91c;',
		'creditcard': '&#xe91d;',
		'chartpie-open': '&#xe91e;',
		'chartpie': '&#xe91f;',
		'checkcircle-open': '&#xe920;',
		'check': '&#xe921;',
		'checkcircle': '&#xe922;',
		'thumbsdown-open': '&#xe923;',
		'thumbsdown': '&#xe924;',
		'thumbsup-open': '&#xe925;',
		'thumbsup': '&#xe926;',
		'commentwait-open': '&#xe927;',
		'commentwait': '&#xe928;',
		'commentssquare-open': '&#xe929;',
		'commentssquare': '&#xe92a;',
		'cart-rush': '&#xe92b;',
		'cart-rush-open': '&#xe92c;',
		'cart-open': '&#xe92d;',
		'cart': '&#xe92e;',
		'camera': '&#xe92f;',
		'calendar-alt-open': '&#xe930;',
		'calendar-alt': '&#xe931;',
		'calendar-open': '&#xe932;',
		'calendar': '&#xe933;',
		'birthdaycake': '&#xe934;',
		'bookmark-open': '&#xe935;',
		'bookmark': '&#xe936;',
		'commentsquare-open': '&#xe937;',
		'commentsquare': '&#xe938;',
		'answer': '&#xe939;',
		'answer-open': '&#xe93a;',
		'comment-open': '&#xe93b;',
		'comment': '&#xe93c;',
		'engranajes': '&#xe93d;',
		'engranajes-open': '&#xe93e;',
		'bell-slash-open': '&#xe93f;',
		'bell-open': '&#xe940;',
		'bell-slash': '&#xe941;',
		'bell': '&#xe942;',
		'apple-open': '&#xe943;',
		'windows10': '&#xe944;',
		'apple': '&#xe945;',
		'android-open': '&#xe946;',
		'android': '&#xe947;',
		'alarm-clock-open': '&#xe948;',
		'alarm-clock': '&#xe949;',
		'addressbook-open': '&#xe94a;',
		'addressbook': '&#xe94b;',
		'adjust-open': '&#xe94c;',
		'adjust': '&#xe94d;',
		'engranaje': '&#xe94e;',
		'engranaje-open': '&#xe94f;',
		'user-tag-open': '&#xe950;',
		'image': '&#xe951;',
		'image-open': '&#xe952;',
		'images': '&#xe953;',
		'pencil-open': '&#xe954;',
		'pencil': '&#xe955;',
		'delete': '&#xe956;',
		'add': '&#xe957;',
		'tag-open': '&#xe958;',
		'tag': '&#xe959;',
		'newspaper-open': '&#xe95a;',
		'newspaper': '&#xe95b;',
		'book-open': '&#xe95c;',
		'book': '&#xe95d;',
		'settings-open': '&#xe95e;',
		'menubar': '&#xe95f;',
		'settings': '&#xe960;',
		'group': '&#xe961;',
		'h6': '&#xe962;',
		'images-open': '&#xe963;',
		'h5': '&#xe964;',
		'h3': '&#xe965;',
		'h4': '&#xe966;',
		'h1': '&#xe967;',
		'h2': '&#xe968;',
		'underline': '&#xe969;',
		'bold': '&#xe96a;',
		'header': '&#xe96b;',
		'italic': '&#xe96c;',
		'strikethrough': '&#xe96d;',
		'dashboard-open': '&#xe96e;',
		'dashboard': '&#xe96f;',
		'align-justify': '&#xe970;',
		'align-center': '&#xe971;',
		'align-right': '&#xe972;',
		'align-left': '&#xe973;',
		'link': '&#xe974;',
		'palette': '&#xe975;',
		'palette-open': '&#xe976;',
		'file-image-open': '&#xe977;',
		'file-image': '&#xe978;',
		'user-card-open': '&#xe979;',
		'user-card': '&#xe97a;',
		'user-tag': '&#xe97b;',
		'note': '&#xe97c;',
		'note-open': '&#xe97d;',
		'oplock-open': '&#xe97e;',
		'oplock': '&#xe97f;',
		'cruz-open': '&#xe980;',
		'cruz': '&#xe981;',
		'user': '&#xe982;',
		'user-open': '&#xe983;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
