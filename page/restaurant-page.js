
export class RestaurantPage {
    constructor() {
        this.mainMenu = [
            'Pizza', 'Burgers', 'Snacks & Sides', 'Salads', 'Drinks'
        ];
        this.mainMenuItems = [
            'La Rossa',
            'Margherita',
            'Burrata',
            'Jersey Margherita',
            'Panna',
            'Bosco',
            'Pepperoni',
            'Guancia'
        ]
    }
    //Locators
    get frameContainer() { return browser.$('.application-demo-new-dashboard-iframe-container') }
    get frame(){ return browser.$('iframe.application-demo-new-dashboard-iframe') }
    get secondIframe(){ return browser.$('iframe') }
    get lastIframe(){ return browser.$('iframe:nth-of-type(1)') }
    get foodMenu(){ return browser.$$('.TabsControlItem__Name-sc-u0xhvn-0') }
    get specialtyMenu(){ return browser.$$('.Name__NameComponent-sc-6egqc9-0') }

    async scrollToIframe(){
        const frameContainer = await this.frameContainer;
        await frameContainer.scrollIntoView();
        await frameContainer.click();
    }
    //First Iframe
    async switchFirstIframe(){
        await browser.switchFrame(this.frame);
    }
    //second frame
    async switchSecondIframe(){
        const secondFrame = await this.secondIframe;
        await secondFrame.waitForDisplayed();
        await browser.switchFrame(secondFrame);
    }
    //last frame
    async switchLastIframe(){
        const lastFrame = await this.lastIframe;
        await lastFrame.waitForDisplayed();
        await browser.switchFrame(lastFrame);
    }
    async switchMenuFrame(){   
        /*** SWITCHING BETWEEN IFRAMES ***/
        await this.switchFirstIframe();
        await this.switchSecondIframe();
        await this.switchLastIframe();
        /*** END SWITCHING BETWEEN IFRAMES ***/
    }
    async switchMainContext(){
        await browser.switchFrame(null);
    }
    /*** EXPECTS ***/
    async foodMenuIframe(){
        await this.switchMenuFrame();
        const menuOptions =  await this.foodMenu.map( e => e.getText());
        await this.switchMainContext(); // RETURNING TO THE MAIN CONTEXT
        expect(menuOptions).toEqual(this.mainMenu);
    }
    async specialtyMenuIframe(){
        await this.switchMenuFrame();
        const menuOptions =  await this.specialtyMenu.map( e => e.getText());
        await this.switchMainContext(); // RETURNING TO THE MAIN CONTEXT
        expect(menuOptions).toEqual(this.mainMenuItems);
    }
    /*** END EXPECTS ***/

   

}