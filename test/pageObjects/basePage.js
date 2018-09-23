import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
var expect = chai.expect;

chai.should();
chai.use(chaiAsPromised);


export default class BasePage {
      
    constructor (webdriver) {
        this.driver = webdriver
    };

    async validateElementAvailable (element) {
          try {
              await element;              
              return true;        
          } 
          
          catch (error) {            
              return false;        
          }
     }
}