import wd from 'wd';
const TEST_PORT = 4788;
const TEST_HOST = "localhost";

export default class DriverBuilder { 

 async createDriver(capabilities){
    let newDriver = await wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    this.driver= newDriver.init(capabilities); 
    console.log("The driver during create driver is "+ this.driver);
    return this.driver;
}

async stopDriver(){
    console.log("the driver at the stop is" + this.driver);
    await this.driver.quit();
}

}