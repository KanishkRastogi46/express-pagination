# Installing the package
```bash
npm install paginate-data-array
```

# Importing the package
```js
// for importing the package in commonjs
const { pagination } = require("paginate-data-array");
```

# Usage
```js
pagination(data , page , limit)
// data - an array
// page - defines the page number to be displayed
// limit - number of results in a single page
```

# Parameters required

### __1. data (required) ✅ -__ It is an array of any data type and can also contain the data extracted from a database that has to be shown to the user .

### __2. page (optional)❓-__ If no value is provided , by default it will be equal to 1 and if provided value is <=0 it will automatically make the page value to 1 .

### __3. limit (optional)❓-__ If no value is provided , by default it will be equal to 10 . If provided value is <=0 or > than the length of data parameter it will automatically make the page value to 1 and limit value to 10 .
# 


## *Note :-
### 1. node version should be >=20.11.1 ✅
### 2. npm version should be >=10.8.2 ✅

#  

## Email :- kanishkrastogi46@gmail.com 🔥