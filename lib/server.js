//import log from './logger';
import { server as baseServer, routeConfiguringFunction  } from 'appium-base-driver';
import { WindowsDriver } from 'appium-windows-driver';

function startServer (port, address) {
  let driver = new WindowsDriver({port, address});
  let router = routeConfiguringFunction(driver);
  let server = baseServer(router, port, address);
  //log.info(`WindowsDriver server listening on http://${address}:${port}`);
  return server;
}

export { startServer };