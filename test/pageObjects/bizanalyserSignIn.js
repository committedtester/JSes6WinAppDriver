import BasePage from './BasePage';
export default class bizAnalyserSignIn extends BasePage {

    constructor (webdriver) {
        super(webdriver);        
        this.initializeElements();
    }

    async initializeElements(){
        //identifies all available elements during new object creation
        this.loginButton = this.driver.elementByName("Login");  
    };

    //elements not immediately available on load
    get fileDropDownNew()   {return this.driver.elementByName('New	Ctrl+N'); }
    get bizAnalyserWindow() {return this.driver.elementByAccessibilityId("MainWindow_Standalone");}

    async waitforBizAnalyserToLoad(){
        //chai.expect(await this.validateElementAvailable(this.loginButton)).to.be.true;
    }

    async waitForSigninDialog(){
        await this.waitForElementAvailable(this.bizAnalyserWindow,1000,10);
    }
    
    
    async clickLogin (){
        await this.loginButton.click();
    } 

};