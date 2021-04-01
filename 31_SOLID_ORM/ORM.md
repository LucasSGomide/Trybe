# Object Relational Mapper 

## Patterns

### Data Mapper:
  - Better to use when the database is, big, complex and will change over time.

### Active Record:
  - Easier to put to use, so, when you have a simple data base that won't change over time, you should use it.
    - Example: `Sequelize`.

## Sequelize:

  - Using the sequelize lib will help us to implement backend logic which can adapt to different kinds of database (MySQL , MariaDB , PostgreSQL , SQLite e Microsoft SQL Server.). This will make migrations, and maintenance easier.

### How to Sequelize

#### Basic Sequence:

- Install, Init, Connect
- Create a module (interface to access our database)
- Create migration (Generated after the module creation)
- Create a seeder (populate our database)
- Actions (functions in the controller to access our database)

### 1. Install Sequelize
``` bash
  # Install Lib
  
  npm install sequelize

  # Install CLI commands

  npm install --save-dev sequelize-cli
```
### 2. Init Sequelize
``` bash
  npx sequelize-cli init
```
### 3. Connect to Database
``` bash
  npm install mysql2
```
``` json
  // Config.json

  {
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example", // Database Name
    "host": "127.0.0.1", // local ip
    "dialect": "mysql", // Database manager
    "operatorsAliases": false
  }

  // Best practice is to set Enviroment Variables.
``` 
### 4. Seeds ----> **Model** <---- Transactions
``` bash
  # Create Model

  npx sequelize model:generate --name ModelName --attributes AttributeName:string

  # Create Seed

  $ npx sequelize seed:generate --name seedName

```
### 5. Migrations
``` bash
  # Create Migration

  npx sequelize migration:generate --name migrationName

  # Execute Migration

  $ npx sequelize db:migrate

  # Revert Migration

  $ npx sequelize db:migrate:undo

  # Revert to Specific

  $ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```
### 6. Operators


### Create Database with Sequelize

- After setting up the `config.json` file, you can run de following code:
``` bash
  # Create Database

  sequelize db:create 
```

### Model

- The model folder will start with a `index.js` file already in it. This file is important to stablish a connection instancy between the model files and the database.

- Sequelize models represent a database row which shows many things about the entity, like name, columns, and data types.

``` bash
# Creating a Model

 npx sequelize model:generate --name ModelName --attributes AttributeName:string

 # Generates a model and a migration which will create a DB table.
```
- IMPORTANT:
  - `--name`: Table Name
  - `--attributes`: Column Name and Data Type (The attributes can be defined later on the created model file)

- After creating a model the following file `modelName.js` structure will be created with it:
``` javaScript
  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class User extends Model {
      /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
      static associate(models) {
        // define association here
      }
    };
    User.init({
      fullname: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  };
```

The class method is used for OOP, for now, the better way to use it is de following:

``` javaScript
  // Avoiding OOP pattern

  sequelize.define(modelName, attributes, options)
```

- Recommended structure:

``` javaScript
// Avoiding OOP pattern
// User === ModelName / --name

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    // Js Object structure to add new columns
  });

  return User;
};

module.exports = User;
```

### Migrations

- A migration is automatically created when we create a new `Model` to our application.

- A migration is a way to have a controlled and accessible record of database changes. Something like GIT.

#### Up:
- This config shows to the migration what to do to set changes in the database

#### Down:
- This config shows to the migration how to revert changes in the database.

#### Migration Basic Structure

- If you don't want to use createdAt or updatedAt, you can define it in the model. All you gotta do is set a object like:

``` javaScript
...
  {
    timestamps: false,
  },
};

module.exports = Talble // Singular
```

``` javaScript
  'use strict';
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        fullname: {
          type: Sequelize.STRING
        },
        // Here we can add new objects as columns
        // All you gotta do is follow the fullName example
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
    }
  };
```

#### Migration CLI commands:

```bash
  $ npx sequelize db:migrate

# Revert a Migration

  $ npx sequelize db:migrate:undo
```

#### Using Migrations to Update Existing Tables:
- **Never** change an existing populated migration, if you do it, you will lose data from your database.

- If you want to add a new column in your existing table, the right way to do it is creating a new migration for it. This way you will avoid losing previous data from the current version of the database.

``` bash
# Creating a new migration with new field.

  $ npx sequelize migration:generate --name add-column-phone-table-users
```

- **Important**: When you add a column in a new migration, you **MUST** add this information in your table `model`.

- Code example of how to add a colum to an existing table by creating a new migration:

``` javaScript
  'use strict';

  module.exports = {
    // Insert the new colum "phone" to the "Users" table.
    up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phone', {
      type: Sequelize.STRING
    })
    },

    // Remove the created column if needed.
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('Users', 'phone')
    }
  };
```
### Seeders

- A seeder is a way to populate the database, so when you have to run a migration, or unit tests, the seeder will populate the database with the information you set up to. This practice guarantee that you will have consistend information to test the application or to simply run it.

- Just like a migration a seed have the `up` and `down` config, this way it will know what to do to set up the database or to drop it.

#### CLI Command to create a Seed:
``` bash
  $ npx sequelize seed:generate --name users
```

#### Seed basic structure:

``` javaScript
  "use strict";

  module.exports = {
    up: async (queryInterface, Sequelize) =>
    // bulkInsert() -> Used to insert multiple data in a table.
      queryInterface.bulkInsert(
        "Users",
        [
          {
            fullName: "Leonardo",
            email: "leo@test.com",
            // CURRENT_TIMESTAMP is used to save current time of creation.
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          {
            fullName: "JEduardo",
            email: "edu@test.com",
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
          },
        ],
        {}
      ),

    down: async (queryInterface) => queryInterface.
    
    // bulkDelete("table", null, {}) Remove all.
    bulkDelete("Users", null, {}),
  };
```

#### Running seeds to populate the database:

```bash
  $ npx sequelize db:seed:all

# Revert seeds
  $ npx sequelize db:seed:undo:all
```

### Operations / Accessing the Database:

- Main Operations:
  - table.findAll()
  - table.findByPk(id)
  - table.findOne({ where: { column: 'value' } })
  - [Sequelize Finders](https://sequelize.org/master/manual/model-querying-finders.html)

``` javaScript
  const express = require('express');
  const { User } = require('../models');
  const router = express.Router();

  router.get('/', (req, res, next) => {
    // FindAll -> Sequelize native function
    User.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
      });
  });

  // ...

  module.exports = router;
```