/**
 *
 * JavaScript file for performing some interactive and client-side validation.
 *
 * @file
 * @copyright Copyright © 2022- Qiuwen Baike Contributors
 */

// Mandatory check
(function () {
var a = document.getElementById('mw-input-wpTermsOfService') ?
	document.getElementById('wpLoginAttempt') ||
	document.getElementById('wpCreateaccount') :
	false;
if (a) {
	a.disabled = !0;
	document.getElementById('mw-input-wpTermsOfService').checked = !1;
	document
		.getElementById('mw-input-wpTermsOfService')
		.addEventListener('change', function () {
			a.disabled =
					!0 === document.getElementById('mw-input-wpTermsOfService').checked ?
						!1 :
						!0;
		});
}
}());
