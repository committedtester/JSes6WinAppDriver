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

    async waitForNotepadToLoad(){
        chai.expect(await this.validateElementAvailable(this.notepadUntitled)).to.be.true;
    }
    
    async clickFileDropDown (){
        await this.fileDropDown.click();
    }

    async clickFileDropDownNew (){
        await this.fileDropDownNew.click();
    }   

};