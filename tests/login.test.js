import { Selector } from 'testcafe'
import {login} from '../helper'

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test("User Cannot login with invalid credentials", async t => {
    await login('jgjhfjhf','yfuyfuyf')

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')

})

test("User Can log in to application", async t => {
    const signInButton = Selector('#signin_button')
    await login('username','password')
    const loginForm = Selector('#login_form')

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logoutButton = Selector('#logout_link')
    await t.click(logoutButton)

    await t.expect(logoutButton.exists).notOk()
    await t.expect(signInButton.exists).ok()
})