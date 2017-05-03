#local-object-storage

Store objects (& arrays) on top of localstorage web api with one more level of abstraction. Use just like `localStorage` api, but now, you can give object or arrays as the second parameter.

NPM: https://www.npmjs.com/package/local-object-storage

## usage

Install via npm;

~~~
npm install local-object-storage --save
~~~

And, see `test.js` for usage cases;

~~~JS
import ObjectStorage from 'local-object-storage';

let obstorage = new ObjectStorage();

// string usage
obstorage.set("name", "jhon");
obstorage.set("surname", "doe");

// object usage
obstorage.set("user", {name: obstorage.get('name'), surname: obstorage.get('surname')});

// array usage
obstorage.set("array", ['jhon', 'jane']);
console.log(obstorage.get("array"));

// array of object usage
obstorage.set("userArray", [{name: 'jhon', surname: 'doe'}, {name: 'jane', surname: 'doe'}]);


console.log(obstorage.get("user"));
console.log(obstorage.get("userArray"));

~~~
