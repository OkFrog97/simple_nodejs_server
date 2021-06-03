const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpusCount = os.cpus();
    console.log(cpusCount);
}
if (cluster.isWorker){

}
