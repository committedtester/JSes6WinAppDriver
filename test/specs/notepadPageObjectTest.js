import NotepadPage from '../pageObjects/notepadPage';
import Server from '../../lib/server';
import DriverBuilder from '../../lib/driverBuilder';
import capabilities from '../config/capabilities'

let driverBuilder;
let driver;

describe('Tests in a Page Object Model', function () {  
  before(async function () {
    await Server.startServer();
  });

  after(async function () {
    await Server.stopServer();
  });

  beforeEach(async function () {
    driverBuilder = new DriverBuilder();
    driver = await driverBuilder.createDriver(capabilities.notepad);
  });

  afterEach(async function () {
    await driverBuilder.stopDriver();
  });

  it('should run a basic session using a real client', async function () {    
      let notepadPage = new NotepadPage(driver);  
      await notepadPage.waitForNotepadToLoad();
      await notepadPage.clickFileDropDown();    
      await notepadPage.clickFileDropDownNew();
  });
});