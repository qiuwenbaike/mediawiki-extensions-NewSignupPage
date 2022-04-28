/**
 * JavaScript file for performing some interactive and client-side validation of
 * the password fields on the registration form to avoid some user frustration,
 * especially on mobile devices.
 *
 * @file
 * @author by Qiuwen Contributors
 */
// Mandatory check
(function () {
	var a = document.getElementById("wpLoginAttempt") && !document.getElementById("wpOATHToken") || document.getElementById("wpCreateaccount");
	a && (a.disabled = !0, document.getElementById("mw-input-wpTermsOfService").addEventListener("change", function () {
		a.disabled = !0 === document.getElementById("mw-input-wpTermsOfService").checked ? !1 : !0;
	}));
})();