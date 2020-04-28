import { Selector, t } from 'testcafe'

class Navbar {
    constructor(){
        //Selectors here
        this.signinButton  = Selector('#signin_button')
        this.searchBox = Selector('#searchTerm')
    }

    async search(text) {
        await t
            .typeText(this.searchBox, text, { paste:true, replace: true })
            .pressKey('enter')
        
    }
}
export default Navbar