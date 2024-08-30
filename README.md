# _Installing the package_
```bash
> npm install paginate-data-array
```

# _Exporting the package_
```js
// for exporting the package in commonjs
const { pagination } = require("paginate-data-array");

// for exporting the package in ES6 module
import { pagination } from "paginate-data-array";
```

# _Parameters required_

### __1. data (required) ✅ -__ It is an array of any data type and can also contain the data extracted from a database that has to be shown to the user .

### __2. page (optional)❓-__ If no value is provided , by default it will be equal to 1 and if provided value is <=0 it will automatically make the page value to 1 .

### __3. limit (optional)❓-__ If no value is provided , by default it will be equal to 10 . If provided value is <=0 or > than the length of data parameter it will automatically make the page value to 1 and limit value to 10 .
# 


## _*Note :-_
### 1. node version should be >=20.11.1 ✅
### 2. npm version should be >=10.8.2 ✅

#  

## _Email :-_ kanishkrastogi46@gmail.com 🔥