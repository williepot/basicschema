# Basic JS schema

Module for easily creating and managing simple JS objects as schemas that can be used for general purpose.

## Getting Started

See usage section for notes on how to implement the project on a live system.

### Prerequisites

The module can be used in both Node.js and frontend JS projects.

### Installing

To get the package, simply run the following commands from terminal in your project directory:

Using npm
```
npm install basicschema --save
```

Using yarn
```
yarn add basicschema
```

## Usage

The module can be used by first requiring the module in a project file and then crating a schema as follows:

example.js
```
const BasicSchema = require('basicschema');


const exampleSchema = new BasicSchema({
    name: {
      value: 'Jhon'
    },
    surname: {
      value: 'Doe'
    },
    age: {
      value: 32
    }
  });

```

Once a schema has been created as above, there are ***five*** built-in functions that can be used.

* **model**
Returns the schema objec, for example:
    ```
    console.log( exampleSchema.model );

    // Result
    {
        name: {
            value: 'Jhon'
        },
        surname: {
            value: 'Doe'
        },
        age: {
            value: 32
        }
    }
    ```
* **getFieldNames**
Returns an array containing the ***names*** of all the fields.
    ```
    console.log( exampleSchema.getFieldNames );

    // Result
    ['name', 'surname', 'age']
    ```

* **getField(*field*)**
Returns the ***value*** of a specific field.
    ```
    console.log( exampleSchema.getField('name') );

    // Result
    'Jhon'
    ```

* **setField(*field*, *value*)**
Sets the ***value*** of a specific ***field***
    ```
    exampleSchema.setField('name', 'Jane')
    console.log( exampleSchema.model );

    // Result
    {
        name: {
            value: 'Jane'
        },
        surname: {
            value: 'Doe'
        },
        age: {
            value: 32
        }
    }
    ```

* **reset(*emptyValue*)**
Clears all the ***field values*** in the schema and inserts a plaseholder (usually ***null*** or ***''***)
    ```
    exampleSchema.reset(null);
    console.log( exampleSchema.model );

    // Result - using null =>  exampleSchema.reset(null);
    {
        name: {
            value: null
        },
        surname: {
            value: null
        },
        age: {
            value: null
        }
    }

    // Result - using '' =>  exampleSchema.reset('');
    {
        name: {
            value: ''
        },
        surname: {
            value: ''
        },
        age: {
            value: ''
        }
    }
    ```


### Additional usage notes

As the module has been built using an ES6 class (see github), it can easily be further extended as required.

## Author

* **Willie Potgieter** - *Initial work* - [GitHub page](https://williepot.github.io)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
