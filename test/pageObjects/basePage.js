import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

export default class BasePage {
      
    constructor (webdriver) {
        this.driver = webdriver
    }

    async click (locator) {        
          const element = await this.driver.findElement(locator);
          await element.click();
          return;        
      }

}


