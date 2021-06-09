const cluster = require('cluster');
const os = require('os');
const pid = process.pid

if (cluster.isMaster) {
    const cpusCount = os.cpus().length;
    console.log(`CPUs: ${cpusCount}`);
    console.log(`Master started. PID: ${pid}`);
    for (let i = 0; i < cpusCount -1; i++){
        const worker = cluster.fork();
        worker.on('exit', ()=> {
            console.log(`Worker died. PID: ${worker.process.pid}`);
            cluster.fork();
        });
        worker.send('Hello!')
        worker.on('message', (msg)=>console.log(`Message:${msg.text} from ${msg.pid}`))
    }
}
if (cluster.isWorker){
    require('./worker')
    process.on('message', (msg)=> console.log(msg))
    process.send({text: 'hello', pid: pid})
}
