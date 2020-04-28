import { Selector } from 'testcafe'

fixture `Send Feedback`
    .page`http://zero.webappsecurity.com/index.html`

test('user fills out and submits their feedback', async t => {

    //selectors from homepage
    const feedbackLink = Selector('#feedback')
    //selectors from Feedback page.
    const nameEntryField = Selector('#name')
    const emailEntryField = Selector('#email')
    const subjectEntryField = Selector('#subject')
    const commentEntryField = Selector('#comment')
    const submitButton = Selector("input").withAttribute(
        'value','Send Message')

    //selectors for feedback published
    const feedbackSubmitted = Selector('div').innerText

    //actions
    await t.doubleClick(feedbackLink)
    //after redirect, element no longer visible.
    await t.expect(feedbackLink.exists).notOk()
    //assertions
    await t.typeText(nameEntryField, "somename", {paste: true})
    await t.typeText(emailEntryField, "mail@mail.com", {paste: true})
    await t.typeText(subjectEntryField, "subject goes here", {paste:true})
    await t.typeText(commentEntryField, "comment here\nhello", {paste:true})
    await t.doubleClick(submitButton)

    await t.expect(feedbackSubmitted).contains('They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    //actions

})