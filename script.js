var worker = new Worker('worker.js');

worker.postMessage({msg: 'Hello World'});


worker.onerror = err => console.log('Some errror: ', err)

worker.onmessage = function(e) {
  console.log('Worker said: ', e.data);
}

