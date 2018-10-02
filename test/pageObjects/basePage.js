import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
var expect = chai.expect;

chai.should();
chai.use(chaiAsPromised);

export default class BasePage {
      
    constructor (webdriver) {
        this.driver = webdriver
    };

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async validateElementAvailable (element) {
          try {
              await element;              
              return true;        
          } 
          
          catch (error) {            
              return false;        
          }
     }

async waitForElementAvailable(element, waitDuration=1000, iterations=5)
{
    for (let index = 0; index < iterations; index++) {
        if(this.validateElementAvailable(element))
        {
            return;
        }
        await console.log(`Element not found ${element.toString()} on iteration ${index}`)
        await this.delay(waitDuration);
    }
    
}


}