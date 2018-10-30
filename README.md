
### Installation

This project is tested on ***Node v6.10.0***.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. If you have nvm installed globally, then run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).  If you don't use nvm, be sure that you are using a compatible version. Further details on nvm can be found on the official [github page](https://github.com/creationix/nvm). MAC OSX users are best suited to install nvm with homebrew `brew install nvm`.

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version

Above command should print out the version that you have installed.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install the following globally:

  `npm install -g  grunt-cli`

### Selenium, Appium

  To run your test You must have selenium / Appium server up and running to execute any WebdriverIO tests, or it will fail fast with an error. There are two ways you can run selenium.

  Once all the node dependency modules are installed (through `npm install`) then for development, you can run  `npm run selenium-postinstall` followed by `npm run selenium-start` if you wish to start it manually else you can use `services: ['selenium-standalone'],` in .conf.js to start it automatically which has been added as part of this project. That's all there is to it.!. Please note that this step is only one time activity at the initial framework set up. Alternatively you can also use below options to start the selenium server.

  1. Install Selenium (selenium-standalone) through NPM (this is the recommended way to install) as you can use it as a services in your framework without worrying to start the selenium server manually. Please note that you follow this below step if `selenium-standalone` package in not been installed through package manager. If you are behind a specific proxy, then in that case you need to set environment variables:

      On OSX:

              NODE_TLS_REJECT_UNAUTHORIZED=0 selenium-standalone install

              NODE_TLS_REJECT_UNAUTHORIZED=0 selenium-standalone start

        On Windows:

              setx NODE_TLS_REJECT_UNAUTHORIZED 0

  sudo npm install selenium-standalone@latest -g

  sudo selenium-standalone install

  selenium-standalone start

  OR

  2. Download the latest selenium standalone server version: and then for example
    $ java -jar selenium-server-standalone-3.4.0.jar. This option is require if you have not done the step No-1. Else ignore it. this is the other way of doing.


### Run Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `npm run test`

