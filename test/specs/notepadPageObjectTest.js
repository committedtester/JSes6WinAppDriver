import NotepadPage from '../pageObjects/notepadPage';
import Server from '../../lib/server';
import DriverBuilder from '../../lib/driverBuilder';

let capabilities ={
  app: "C:\\WINDOWS\\system32\\notepad.exe",
  platformName: "Windows",
  deviceName: "WindowsPC"
}

let driverBuilder;
let driver;

describe('Notepad related tests', function () {  
  before(async function () {
    await Server.startServer();
  });

  after(async function () {
    await Server.stopServer();
  });

  beforeEach(async function () {
    driverBuilder = new DriverBuilder();
    driver = await driverBuilder.createDriver(capabilities);
    console.log("My driver in the before each is" +driver);    
  });

  afterEach(async function () {
    await driverBuilder.stopDriver();
  });

  it('should run a basic session using a real client', async function () {    
      await console.log("Driver before test is " +driver);
      let notepadPage = new NotepadPage(driver);
      await notepadPage.clickSystem();
  });
});