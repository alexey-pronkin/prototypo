module.exports = {
	'Test login': function(browser) {
		browser
			.init()
			.waitForElementVisible('input#email-sign-in', 10000)
			.setValue('input#email-sign-in',process.env.PROTOTYPO_LOGIN)
			.setValue('input#password-sign-in', process.env.PROTOTYPO_PASS)
			.click('input[type=submit]')
			.pause(2000)
			.waitForElementVisible('#dashboard', 10000)
			.end();
	},
	'Test login fail': function(browser) {
		browser
			.init()
			.waitForElementVisible('input#email-sign-in', 10000)
			.setValue('input#email-sign-in', "test@no-registered.com")
			.setValue('input#password-sign-in', process.env.PROTOTYPO_PASS)
			.click('input[type=submit]')
			.pause(2000)
			.waitForElementVisible('.warning-message', 10000)
			.end();
	}
};