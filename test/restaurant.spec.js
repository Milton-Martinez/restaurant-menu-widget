import { RestaurantPage } from "../page/restaurant-page";
const restaurantPage = new RestaurantPage() ;

describe('Assessing Iframe Option', () => {
    beforeEach(async () => {
        await browser.url('https://elfsight.com/restaurant-menu-widget/iframe/');
        await restaurantPage.scrollToIframe();
    });

    it('Foods Menu', async () => {
        await restaurantPage.foodMenuIframe();
    });
    it('Specialty Menu', async() => {
        await restaurantPage.specialtyMenuIframe();
    });
});