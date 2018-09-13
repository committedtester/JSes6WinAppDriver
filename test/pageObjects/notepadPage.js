import BasePage from './BasePage';
import { By } from 'selenium-webdriver';
//import AppiumWindowsDriver from 'appium-windows-driver';
//import wd from 'wd';

const FILE_DROPDOWN = By.name("File");

export default class NotepadPage extends BasePage {
      
async clickSystem (){
    console.log("Driver is currently "+this.driver);
       
    //return await this.driver.elementByName("Untitled - Notepad");
    //return await this.driver.FindElementByName("Untitled - Notepad");
    return await this.click(FILE_DROPDOWN);

    //await this.driver.findElement(locator)
    //await this.driver.elementByName("Edit").click();
     //await this.driver.elementByName("File").click();
     //await this.clickSystem(FILE_DROPDOWN);
};
};


