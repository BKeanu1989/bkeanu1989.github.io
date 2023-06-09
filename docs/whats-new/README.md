# What's new
[[toc]]


## Developer experience for Vue 3 with Typescript
https://blog.vuejs.org/posts/vue-3-3
or short summary: [Vue 3 Typescript update](./vue3-typescript.md)


## Rust is being destroyed from the inside
I've noticed multiple kinda halfbad things lately about rust. starting with their logo / mascot / crab.
https://www.youtube.com/watch?v=QEnuzwCWpgQ


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

## Web Worker execution in main thread
meaning we can write code in the main thread but it will execute in a separate web worker

[Web Worker in Main Thread](https://www.builder.io/blog/worker-multi-thread-JSX)