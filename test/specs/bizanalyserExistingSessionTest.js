import BizanalyserSignIn from '../pageObjects/bizanalyserSignIn';
import Server from '../../lib/server';
import DriverBuilder from '../../lib/driverBuilder';
import capabilities from '../config/capabilities';
import WindowsOS from '../pageObjects/windowsOS';

var webdriver = require('selenium-webdriver'),
	Key = webdriver.Key;

let driverBuilder;
let driver;

let bizAnalyserDirectory =`C:\\dev\\BizAnalyser\\BizAnalyser\\FinSuite.BizAnalyser.Desktop\\bin\\Release\\BizAnalyserPro`;

describe('Notepad related tests', function () {  
  

  before(async function () {
    //await Server.startServer();
  });

  after(async function () {
    //await Server.stopServer();
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
    await windowsOS.loadProgramViaRun(bizAnalyserDirectory);    
    await windowsOS.delay(5000);

    let bizanalyserSignIn = new BizanalyserSignIn(driver);
    await bizanalyserSignIn.waitForSigninDialog();

   

    var bizanalyserWindow = await driver.elementByAccessibilityId("MainWindow_Standalone").getAttribute("NativeWindowHandle");
    let bzaHex = (Number(bizanalyserWindow)).toString(16);

    var existingBizAnalyserCapabilities =
    {
      "appTopLevelWindow": bzaHex,
      "platformName": "Windows",
      "deviceName": "WindowsPC",
      "newCommandTimeout": "120000"
    }

    driverBuilder = new DriverBuilder();
    driver = await driverBuilder.createDriver(existingBizAnalyserCapabilities);

    

    bizanalyserSignIn = new BizanalyserSignIn(driver);
    await bizanalyserSignIn.waitForSigninDialog();
    await bizanalyserSignIn.clickLogin();

  });
});