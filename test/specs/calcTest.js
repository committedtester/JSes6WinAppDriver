//import Server from '../../lib/server';
import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import capabilities from '../config/capabilities';
chai.should();
chai.use(chaiAsPromised);

let driver;

describe('Driver', function () {
  before(async function () {
    //await Server.startServer();
  });

  after(async function () {
    //await Server.stopServer();
  });

  beforeEach(async function () {
    driver = await wd.promiseChainRemote(capabilities.testHost, capabilities.testPort);
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('should run a basic session using a real client', async function () {
    await driver.init(capabilities.calculator);
    await console.log("driver after capabilities");
    await console.log(driver);
    await driver.elementByName("Calculator");
    await driver.elementByName("Open Navigation").click();
  });
});