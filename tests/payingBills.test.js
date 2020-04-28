import { Selector, t } from 'testcafe'
import { login } from '../helper'

fixture `New payee test`
    .page`http://zero.webappsecurity.com/index.html`

    test.before( async t => {/*
        const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, "username", { paste: true })
    await t.typeText(passwordInput, "password", { paste: true })
    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)
    */
    await login('username','password')
    })('User can add new payee to the list', async t =>{

        //selectors
        const payBillsTab = Selector('#pay_bills_tab')
        const addNewPayeeTab = Selector('a').withText('Add New Payee')
        const form_name = Selector('#np_new_payee_name')
        const form_address = Selector('#np_new_payee_address')
        const form_account = Selector('#np_new_payee_account')
        const form_details = Selector('#np_new_payee_details')
        const form_submitButton = Selector('#add_new_payee')
        const message = Selector('#alert_content').innerText

    //actions
    await t.click(payBillsTab)
    await t.click(addNewPayeeTab)
    await t.typeText(form_name, 'name', {paste: true})
    await t.typeText(form_address, 'address', {paste: true})
    await t.typeText(form_account, 'account', {paste: true})
    await t.typeText(form_details, 'details', {paste: true})
    await t.click(form_submitButton)

    //assertions
    await t
        .expect(message)
        .contains('successfully created.')
    })

    