describe('Show me some XPATHS', () => {
    it('Some examples', () => {
        // xpath for input with type text
        const input = `//input[@type="text"]`

        // xpath for input with value of phone number
        const inputValue = `//input[@value="PhoneNumber"]`

        // xpath for div with class "someClass"
        const classXpath = `//div[@class="someClass"]`

        // xpath for div with class "someID"
        const idXpath = `//div[@id="someID"]`

        // xpath for a href with some value
        const href = `//a[@href="https://www.google.com.au"]`

        // xpath for targeting an image
        const imageXpath = `//image[@src="//cdn.someadress.com/images/randomimage/22"]`
    })
})