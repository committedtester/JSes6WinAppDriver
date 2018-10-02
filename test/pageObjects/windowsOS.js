import BasePage from './BasePage';
var webdriver = require('selenium-webdriver'),
	Key = webdriver.Key;


export default class windowsOS extends BasePage {

    constructor (webdriver) {
        super(webdriver);        
        this.initializeElements();
    }

    async initializeElements(){
        //identifies all available elements during new object creation
        this.taskBar = this.driver.elementByName('Taskbar');  
    };

    //elements not immediately available on load
    get runDialog()   {return this.driver.elementByName('Run').elementByName('Open'); }

    async loadProgramViaRun(programDirectory){
        await this.taskBar.sendKeys(Key.CONTROL +Key.ESCAPE);
        await this.taskBar.sendKeys(Key.ALT +'r');
        await this.runDialog.sendKeys(programDirectory+Key.RETURN);
    }  


}