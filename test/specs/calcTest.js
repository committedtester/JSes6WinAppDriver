import Server from '../../lib/server';
import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.should();
chai.use(chaiAsPromised);

const TEST_PORT = 4788;
const TEST_HOST = "localhost";

let capabilities ={
  app: "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App",
  platformName: "Windows",
  deviceName: "WindowsPC"
}

let driver;

describe('Driver', function () {
  before(async function () {
    await Server.startServer();
  });

  after(async function () {
    await Server.stopServer();
  });

  beforeEach(async function () {
    driver = wd.promiseChainRemote(TEST_HOST, TEST_PORT);
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('should run a basic session using a real client', async function () {
    await driver.init(capabilities);
    await driver.elementByName("Calculator");
    await driver.elementByName("Open Navigation").click();
  });
});