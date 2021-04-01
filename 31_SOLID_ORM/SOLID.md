# SOLID Architecture

## Principles:

### **S**: Single Responsability:
  - Functions must have single responsabilities. By following this rule you can achive functions that can be easily maintained and understood.

### **O**: Open/Closed Principal:
  - Open for extension but closed for changes. It means that you can't change the function **main behavior** but you can create a function that can **adapt** to different circumstances.

### **D**: Dependency Inversion Principle:
  - This is a hard concept to understand, but let's imagine a function that get information in a MongoDB data base. Applying this principle means that if the user wants to get information in a SQL data base, the function must be flexible enough to accept it.

## SOLID Applied to backend with NodeJs + MSC:

### Patterns:
  - Example:
    ``` JavaScript
    // Factory Function.
    ```

    ``` JavaScript
    // Index/Route Function.
    ```


### **Index/Routes Layer**:
  - When you apply SOLID principles to the index layer of your application, the index/routes layer will be responsible to send the database connection as argument of the `factory` function. This way the `index` layer will send the connection directly to the `model`.

  - Example:
``` JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const connection = require('./models/connection');
const UserModel = require('./models/userModel');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const userModel = UserModel.factory(connection);
app.post('/users', userController.createUser(userModel));

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
```

### **Model Layer**:
  - When you create a function that have a connection to the database in the model layer of your application you create a "function dependency". If you apply the solid `Dependency Inversion` principle, you can remove the connection from the function and set it as argument, so your function will be able to stablish connection with whatever data base you want to.

  - Example:

``` JavaScript
const factory = (connection) => {
  return {
    create: async function (username, email, password, role) {
      await connection.execute(
        'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
        [username, email, password, role]
      );
    }
  }
}

module.exports = {
  factory,
};
```

### **Service Layer**:
  - When the `Single Responsability` principle is applied, the `service` layer will be responsible to validate information, but the validation functions **must** be created outside the service function scope. This will result in something like a `validations file` inside your service folder for example.

 - Example:

``` JavaScript
const validateEmail = (email) => {
  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
  return emailRegex.test(email);
}

const validatePassword = (password, passwordRegex) => (passwordRegex.test(password));

const validateRole = (role, validRoles) => (validRoles.includes(role));

```

### **Controller Layer**:
  - The controller layer should be as generic as it gets, this way if you need to change some behavior in your application, you can access the `model` or the `validations file`.
