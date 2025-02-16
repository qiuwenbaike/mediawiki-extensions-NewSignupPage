/**
 * @name NewSignupPage.js
 * @description JavaScript file for performing some interactive and client-side validation.
 * @author WaitSpring
 * @copyright Copyright © 2022- Qiuwen Baike Contributors
 * @license GPL-2.0-or-later
 */

'use strict';

// Mandatory check
(() => {
	const wpTermsOfService = document.querySelector('#mw-input-wpTermsOfService');
	if (!wpTermsOfService) {
		return;
	}

	const wpLoginAttempt = document.querySelector('#wpLoginAttempt');
	const wpCreateaccount = document.querySelector('#wpCreateaccount');
	const wpSubmitButton = wpLoginAttempt || wpCreateaccount;
	if (!wpSubmitButton) {
		return;
	}

	wpSubmitButton.disabled = true;
	wpTermsOfService.checked = false;
	wpTermsOfService.addEventListener('change', () => {
		wpSubmitButton.disabled = !wpTermsOfService.checked;
	});
})();
