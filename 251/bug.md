## bug report

```
SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:374:25)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
    at Module.require (module.js:354:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/mnt/c/Users/wohan/Desktop/SinglePage/251/node_modules/debug/src/index.js:9:19)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
LAPTOP-V9ODM74A% node socket.js
/mnt/c/Users/wohan/Desktop/SinglePage/251/node_modules/debug/src/node.js:132
        let val = process.env[key]

```
this bug is for node version too low, like something that we cant use let, related about "use strict"

-----------

```
events.js; 72
        throw er: //unhandled "error" event
```

this is cause the port is used, so just release the port.

use `ps aux | grep node` to see the process