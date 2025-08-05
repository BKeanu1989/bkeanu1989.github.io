# Performance
Performance is crucial. A lot of studies suggest, that with every 0.1 second longer a site takes to load you lose x % of customers.
One can optimize the backend and frontend. The easiest performance improvement is with bigger/larger machine. But that shouldn't be the first action.

Latency is the time it takes for a packet of data to travel from source to a destination. In terms of performance optimization, it's important to optimize to reduce causes of latency and to test site performance emulating high latency to optimize for users with lousy connections. 

## Backend

## Frontend


## Measurement
```js

function sleep(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("sleep ended")
           res(true) 
        }, time);
    }) 
}

async function startSomeDemo() {
    performance.mark("demo-started")
    await sleep(1000)

    performance.mark('demo-end');

    // Measure the time between 'startFetch' and 'endFetch'
    performance.measure('demo-duration', 'demo-started', 'demo-end');

    // Get the measurement result
    const measurements = performance.getEntriesByName('demo-duration')[0];
    console.log(`Fetch took ${measurements.duration} milliseconds`);

    return measurements
    
}


startSomeDemo().then((x) => {
    console.log(x)
}).catch((err) => console.log)



sleep(1000).then(() => console.log("custom sleep ended"))

```

