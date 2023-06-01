# What's new

## Array methods
    - Array.prototype.at
    - Array.prototype.with

## Cloning Objects
instead of 
```js
const whatever = JSON.parse(JSON.stringify(foo))
```
we can do this now
```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

