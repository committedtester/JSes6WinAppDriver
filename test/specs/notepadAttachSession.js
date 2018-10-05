import NotepadPage from '../pageObjects/notepadPage';
import Server from '../../lib/server';
import DriverBuilder from '../../lib/driverBuilder';
import capabilities from '../config/capabilities';
import WindowsOS from '../pageObjects/windowsOS';

let driverBuilder;
let driver;

let notepadLocation =`C:\\Windows\\System32\notepad.exe`;

describe('Notepad related tests', function () {  
  

  before(async function () {
    await Server.startServer();
  });

  after(async function () {
    await Server.stopServer();
  });

  beforeEach(async function () {
    
  });

  afterEach(async function () {
    await driverBuilder.stopDriver();
  });

  it('should run a basic session using a real client', async function () {   
    this.timeout(180000);
    driverBuilder = new DriverBuilder();
    driver = await driverBuilder.createDriver(capabilities.root);

    let windowsOS = new WindowsOS(driver);
    await windowsOS.loadProgramViaRun(notepadLocation);    

    let notepadPage = new NotepadPage(driver);
    driver = await notepadPage.connectNotePadDriver();

    let notepadPage = new NotepadPage(driver);
    await notepadPage.waitForNotepadToLoad();
    await notepadPage.clickFileDropDown();    
    await notepadPage.clickFileDropDownNew();    

  });
});