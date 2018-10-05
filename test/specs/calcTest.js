import Server from '../../lib/server';
import wd from 'wd';
import capabilities from '../config/capabilities';

let driver;

describe('Tests in a non Page Object Model', function () {
  before(async function () {
    await Server.startServer();
  });

  after(async function () {
    await Server.stopServer();
  });

  beforeEach(async function () {
    driver = await wd.promiseChainRemote(capabilities.testHost, capabilities.testPort);
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('should run a basic session using a real client', async function () {
    await driver.init(capabilities.calculator);
    await driver.elementByName("Calculator");
    await driver.elementByName("Open Navigation").click();
  });
});