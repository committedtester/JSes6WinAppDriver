import wd from 'wd';
import capabilities from '../test/config/capabilities';

const TEST_PORT = capabilities.testPort;
const TEST_HOST = capabilities.testHost;
let driver;

export default class DriverBuilder { 

 async createDriver(capabilities){
    driver = await wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    await driver.init(capabilities); 
    return driver;
}

async stopDriver(){
    await driver.quit();
}

}