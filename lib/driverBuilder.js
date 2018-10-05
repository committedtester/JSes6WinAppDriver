import wd from 'wd';
import capabilities from '../test/config/capabilities';

const TEST_PORT = capabilities.testPort;
const TEST_HOST = capabilities.testHost;
let driver;

import BasePage from '../test/pageObjects/basePage'
export default class DriverBuilder extends BasePage {

 async createDriver(capabilities){
    driver = await wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    await driver.init(capabilities); 
    return driver;
}

async createSlowAppDriver(capabilities,fallBackCapabilities){
    driver = await wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    try {
        await driver.init(capabilities); 
    } catch (error) {
        await driver.init(fallBackCapabilities);
    }
    return driver;
}

async stopDriver(){
    await driver.quit();
}

}

//await bizanalyserSignIn.waitForSigninDialog();

   

    // var bizanalyserWindow = await driver.elementByAccessibilityId("MainWindow_Standalone").getAttribute("NativeWindowHandle");
    // let bzaHex = (Number(bizanalyserWindow)).toString(16);

    // var existingBizAnalyserCapabilities =
    // {
    //   "appTopLevelWindow": bzaHex,
    //   "platformName": "Windows",
    //   "deviceName": "WindowsPC",
    //   "newCommandTimeout": "120000"
    // }

    // driverBuilder = new DriverBuilder();
    // driver = await driverBuilder.createDriver(existingBizAnalyserCapabilities);