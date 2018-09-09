//import { By } from 'selenium-webdriver';
//import appium-windows-driver from 'appium-windows-driver';
import BasePage from './BasePage';

//const FILE_DROPDOWN = By.name("File");


export default class NotepadPage extends BasePage {
      
async clickSystem (){
    console.log("Driver is currently "+this.driver);
    //await this.click(FILE_DROPDOWN);

    //await this.driver.findElement(locator)

    //await this.driver.elementByName("Edit").click();
     //await this.driver.elementByName("File").click();
     //await this.clickSystem(FILE_DROPDOWN);
};

};

//await driver.elementByName("Login").click();
