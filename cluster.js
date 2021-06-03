const cluster = require('cluster');
const os = require('os');
const pid = process.pid

if (cluster.isMaster) {
    const cpusCount = os.cpus().length;
    console.log(`CPUs: ${cpusCount}`);
    console.log(`Master started. PID: ${pid}`);
}
if (cluster.isWorker){

}
