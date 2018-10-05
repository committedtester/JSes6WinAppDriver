import BasePage from './BasePage';
export default class NotepadPage extends BasePage {

    constructor (webdriver) {
        super(webdriver);        
        this.initializeElements();
    }

    async initializeElements(){
        //identifies all available elements during new object creation
        this.notepadUntitled = this.driver.elementByName("Untitled - Notepad");  
        this.fileDropDown = this.driver.elementByName('File');
        this.editDropDown = this.driver.elementByName('Edit');
    };

    //elements not immediately available on load
    get fileDropDownNew()   {return this.driver.elementByName('New	Ctrl+N'); }

    async waitForNotePadDialog(){
        await this.waitForElementAvailable(this.notepadUntitled,1000,10);
    }    
    
    async connectNotePadDriver(){ 
        
        await this.waitForNotePadDialog();            
        var notepadWindow = await this.notepadUntitled.getAttribute("NativeWindowHandle");
        let hex = (Number(notepadWindow)).toString(16);

        var existingNotepadCapabilities =
        {
        "appTopLevelWindow": hex,
        "platformName": "Windows",
        "deviceName": "WindowsPC",
        "newCommandTimeout": "120000"
        }
        let driverBuilder = new DriverBuilder();
        this.driver = await driverBuilder.createDriver(existingNotepadCapabilities);
        return this.driver;
        }

   
    async clickFileDropDown (){
        await this.fileDropDown.click();
    }

    async clickFileDropDownNew (){
        await this.fileDropDownNew.click();
    }   

};