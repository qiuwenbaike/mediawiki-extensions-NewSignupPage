/**
 * JavaScript file for performing some interactive and client-side validation.
 * @file
 * @copyright Copyright © 2022- Qiuwen Baike Contributors
 */

// Mandatory check
(function () {
	var a = document.getElementById("wpName1") || document.getElementById("wpName2") ? document.getElementById("wpLoginAttempt") || document.getElementById("wpCreateaccount") : false;
		a && (a.disabled = !0, document.getElementById("mw-input-wpTermsOfService").addEventListener("change", function () {
		a.disabled = !0 === document.getElementById("mw-input-wpTermsOfService").checked ? !1 : !0;
	}));
})();
