import BasePage from './BasePage';
import DriverBuilder from '../../lib/driverBuilder';
export default class bizAnalyserSignIn extends BasePage {

    constructor (webdriver) {
        super(webdriver);        
        this.initializeElements();
    }

    async initializeElements(){
        //identifies all available elements during new object creation         
    };

    //elements not immediately available on load
    get bizAnalyserWindow() {return this.driver.elementByAccessibilityId("MainWindow_Standalone");}
    get loginButton() {return this.driver.elementByName("Login");}
    
    async waitForSigninDialog(){
        await this.waitForElementAvailable(this.bizAnalyserWindow,1000,10);
    }    
    
    async connectBizAnalyserDriver(){ 
        
        await this.waitForSigninDialog();            
        var bizanalyserWindow = await this.bizAnalyserWindow.getAttribute("NativeWindowHandle");
        let bzaHex = (Number(bizanalyserWindow)).toString(16);

        var existingBizAnalyserCapabilities =
        {
        "appTopLevelWindow": bzaHex,
        "platformName": "Windows",
        "deviceName": "WindowsPC",
        "newCommandTimeout": "120000"
        }
        let driverBuilder = new DriverBuilder();
        this.driver = await driverBuilder.createDriver(existingBizAnalyserCapabilities);
        return this.driver;
        }

    async clickLogin (){
        await this.loginButton.click();
    } 




};