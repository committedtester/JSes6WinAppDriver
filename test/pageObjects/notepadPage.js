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
    };

    get fileDropDownNew()   { return this.driver.elementByName('New	Ctrl+N'); }

    async waitForNotepadToLoad(){
        await this.notepadUntitled;
    }
    
    async clickFileDropDown (){
        await this.fileDropDown.click();
    }

    async clickFileDropDownNew (){
        //await this.driver.elementByName('New	Ctrl+N').click();
        await this.fileDropDownNew.click();
    }   

};