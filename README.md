# idris-galiyara-WeatherApp

## Sample .env File


>PORT = 3000<br/>
>NODE_ENV = Dev<br/>
>APIPROVIDER = OpenWeatherMap<br/>
>DB = mongo<br/>
<br/>

Please note that in order to start this app you will require a ***'.env'*** file in the root folder of app.<br/>
To Save logs to database you will need to provide your machine/server connection string to below path

> dataAccessLayer > MongoDB > config > config.js

>{  <br/>
>"database": "already Present at location",<br/>
>"mongoUrl" :"Your Mongo string if not running on default port"<br/>
}<br/>

<br/>

Weather Provider End point and Secret key has been Configured on below path<br/>
>service > config > config.js

for configurable BaseURl and version wise route follow below path<br/>
>weatherApp > config > constant.json

To start app please follow below commands<br/>

> npm install<br/>
> npm run<br/>
> // for unit test command<br/>
> npm run test:unit <br/>
