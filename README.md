

# WeatherReport
This application can be used to get weather report of any location across the world for the next 5 days.
[It is hosted on public server over here](https://shashankvivek.github.io/)

 - A user can type minimum 3 characters into the text box and the application provides a feature of typeahead, where the user can select the desired loction.
 - Once clicked, the system will automatically fetch all the weather related information for respective dates and time. 
***Prerequisites:*** 
 - A browser ( Prefer chrome )
 - Node Js  and `npm` should be installed on your system.
 - A installed web server to host the application on your local machine. In case there isn't any web server installed, run
  > npm install -g local-web-server

Installing globally will reduce to hassle to configure PATH variables etc.

- If you have installed `local-web-server` , go to the folder where you have cloned or downloaded the repository and run below command:
> ws --https --spa index.html

Go to browser and hit > https://127.0.0.1:8000

  
## Steps to run the code

 - To keep things simple, all dependencies are already included in this repository. The only extra dependencies required to be downloaded is for its test runner i.e Karma.
 - To run the test, download the repository and run 
 > npm install
 - Once all dependencies are installed, you can run the test cases using command 
> karma start
 - You'll see the respective test cases getting passed successfully.
 
## Future Improvements
 - Minify css and JS files using gulp to increase performance and decrease load time.
 - Provide better weather report , it should be more intuitive and graphical so that it is easy to understand in one glance.
 - Allow user to select location from suggestion box using arrow keys.
 - Need to work on  UX.
 - Can provide user the option to select Unit of Temperature , to filter results by date / time etc.
 - More details are required to be shown, as of now only temperature is shown, *we can use other data like humidity, cloud info , wind speed to make it more informative* .
 - Test cases for all the above codes.
 - Grouping weather results with dates will make it more readable.
 - The DI in controllers and other features is not handled for minification purpose for now but it can be handled by using `ng-annotate` when minifying and uglyfying using `Gulp`
 - `ng-docs` can be used for documentation management.
 
## Technology Overview
 - The application has been written down in AngularJS 1.4
 - The application has modular structure where the main application comprised of other modules like `search` and `report` display. 
 - The application exploits features of AngularJS like *controller, service, filters, directives,values* etc to follow the best practices of angularJS.
 - The css uses bootstrap for basic UI designs and layout , where as rather than using all third party files like `ui bootstrap tpls js` to implement typeahead feature, I have created custom directives and css file to achieve the same behavior. 
 - The UI has been kept simple to highlight more on implementation logic.
 - Spinner has been used for graceful user data submission with server.
 - `ng-model-options="{debounce: 500}"` has been used in search-directive to reduce the continuous hit of API for every change of user input data.
 - Karma has been used as a test runner with Jasmine as the test framework.