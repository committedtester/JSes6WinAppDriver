# WinAppDriver Framework written in JS ES6
I noticed that Microsoft's [WinAppDriver](https://github.com/Microsoft/WinAppDriver) didn't have an example written in Javascript ES6 

This GitHub Repository has test examples for:
* Calculator written in a non-page object model style
* Notepad written in a page object model style
* Notepad where we start at a root level, wait and then attach to an active window (useful for slow starting applications)

Compatible with WinAppDriver v1.1

## Setup and Execution
[WinAppDriver Installer](https://github.com/Microsoft/WinAppDriver#installing-and-running-windows-application-driver) 
* npm install 
* npm run calc  
* npm run notepadPOM
* npm run notepadAttach  

## Further configuration
Alternatively disable the following code in Mocha the Before/After hooks
* await Server.startServer();
* await Server.stopServer();
Then download and run Appium Desktop (run as administrator)
(Benefits are that the WinAppDriver output shows in Appium Desktop)