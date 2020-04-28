import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

fixture `Send forgotten password test`.page`http://zero.webappsecurity.com/index.html`

    test('User can request new password to be sent to their email', async t => {
        //get selectors
        //const signInButton = Selector("#signin_button")
        const linkToPassword = Selector("a").withText('Forgot your password ?')
        const emailInput = Selector("#user_email")
        const message = Selector('div').innerText
       
        //actions
        await t.click(navbar.signinButton)
        await t.click(linkToPassword)
        await t.typeText(emailInput,"email@random.com", {paste: true})
        await t.pressKey('enter')

        //assertions
        await t.expect(message).contains('email@random.com')
        await t.expect(emailInput.exists).notOk()

    })

