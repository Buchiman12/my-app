const os = require("os");

console.log(os.platform()) // retrieve the os the node is currently runing on
console.log(os.arch()) // system architecture
console.log(os.type()) // shows the official os name
console.log(os.release()) // shows the sys os kernel version
console.log(os.version()) //returns the specific operating system version with more details than the release() method:
console.log(os.cpus()) // returns an array of objects with details about each logical CPU core. 
console.log(os.uptime()) //
console.log(os.totalmem()); // 8589934592 (8 GB)
console.log(os.freemem());
console.log(os.userInfo())
console.log(os.networkInterfaces());