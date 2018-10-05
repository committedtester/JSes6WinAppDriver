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