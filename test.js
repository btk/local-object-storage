import ObjectStorage from './index.js';

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
