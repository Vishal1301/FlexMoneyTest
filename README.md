# FlexMoneyTest

Follow below steps(windows)
1. Clone the project locally
2. Install Node JS and run npm install
-- this will install all the required dependencies mentioned in package.json
3.npx codeceptjs run --plugins allure
-- this will create a report locally and stored in temp folder or the path can be set as required
after completion of  all the scenario
4.allure serve output
-- this will generate report and open in browser automatically
![image](https://user-images.githubusercontent.com/52525679/178150290-e789a38b-56f2-47de-a487-eaf4201b8ed1.png)
![image](https://user-images.githubusercontent.com/52525679/178150297-69f4ab0b-3e2e-48d8-bcaa-42158744144c.png)


Important files :
flexmoney-homepage folder
This page will have one feature file, one step def file and one page file 
so to add negative scenario we can have multiple page file as well

codecept.conf.js
This will have all the important base setup
like which browser: chrome,firefox etc..
which driver : Webdriver,Puppeteer,TestCafe and many more supported by Codeceptjs

package.json:
dependencies required will be mentioned here (Just like POM)

