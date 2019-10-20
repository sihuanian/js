## promise

.then .catch 都会返回一个新的 Promise，该Promise最终状态根据then 和 catch 的回调函数的执行结果决定
- throw 就会将状态改变成rejected
- return 就会将状态改变成resolved
- 如果回调函数最终return 了一个 Promise，它的状态会与这个回调的Promise 的状态保持一致