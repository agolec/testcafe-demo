import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

fixture `Searchbox test`
.page`http://zero.webappsecurity.com/index.html`

test("User can search for information using searchbox", async t => {

    //const searchBox = Selector('#searchTerm')
    const searchResults = Selector("h2")
    const linkText = Selector('div').innerText

    await t.typeText(navbar.searchBox, "online bank", { paste: true})
    await t.pressKey('enter')

    await t.expect(searchResults).ok()
    await t.expect(navbar.searchBox.exists).ok()

    await t.expect(linkText).contains('Zero - Free Access to Online Banking')


})