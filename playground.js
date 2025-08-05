function sleep(time) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("sleep ended");
      res(true);
    }, time);
  });
}

async function startSomeDemo() {
  performance.mark("demo-started");
  await sleep(1000);

  performance.mark("demo-end");

  // Measure the time between 'startFetch' and 'endFetch'
  performance.measure("demo-duration", "demo-started", "demo-end");

  // Get the measurement result
  const measurements = performance.getEntriesByName("demo-duration")[0];
  console.log(`Fetch took ${measurements.duration} milliseconds`);
  return measurements;
}

(async function () {
  console.log("fn started");
  await sleep(2000);
  const m = await startSomeDemo();
  console.log("🚀 ~ m:", m);
})();

// startSomeDemo()
