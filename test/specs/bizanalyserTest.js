import BizanalyserSignIn from '../pageObjects/bizanalyserSignIn';
import Server from '../../lib/server';
import DriverBuilder from '../../lib/driverBuilder';
import capabilities from '../config/capabilities';


let driverBuilder;
let driver;
let bizanalyserSignIn;

describe('Notepad related tests', function () {  
  

  before(async function () {
    //await Server.startServer();
  });

  after(async function () {
    //await Server.stopServer();
  });

  beforeEach(async function () {
    this.timeout(180000);
    driverBuilder = new DriverBuilder();
    driver = await driverBuilder.createSlowAppDriver(capabilities.bizanalyser,capabilities.root);
    bizanalyserSignIn = new BizanalyserSignIn(driver);
    driver = await bizanalyserSignIn.connectBizAnalyserDriver();
    bizanalyserSignIn = new BizanalyserSignIn(driver); 
   
  });

  afterEach(async function () {
    await driverBuilder.stopDriver();
  });

  it('should run a basic session using a real client', async function () {           
    await bizanalyserSignIn.clickLogin();

  });
});