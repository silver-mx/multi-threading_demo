const { workerData, parentPort, threadId } = require("worker_threads");

console.log(`Worker thread started[thread=${threadId}]`);

let counter = 0;
for (let i = 0; i < 20_000_000_000 / workerData.thread_count; i++) {
  counter++;
}

parentPort.postMessage(counter);

console.log(`Worker thread finished[thread=${threadId}]`);