## 非阻塞I/O
  在I/O 过程中可以接受其它的输入
  npm i glob
  可以递归查找文件

## 回调函数

### 规范
1. 第一个参数是error
2. 后面参数是结果

tips: try catch 只能抓取到一个调用栈即一个事件循环内的错误

## 事件循环 event loop
- 宏服务： setTimeout setInterval I/O
- 微服务：.then catch finally


宏任务
 	浏览器	Node
I/O	✅	✅
setTimeout	✅	✅
setInterval	✅	✅
setImmediate	❌	✅
requestAnimationFrame	✅	❌


微任务
 	浏览器	Node
process.nextTick	❌	✅
MutationObserver	✅	❌
Promise.then catch finally	✅	✅