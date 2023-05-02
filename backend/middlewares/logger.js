module.exports = (req, res, next)=>{
    const startTime = process.hrtime();

    res.on('finish', ()=>{
        const totalTime = process.hrtime(startTime);
        const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1e6;
        const responseObject = {verb:`${req.method}`, url:`${req.url}`, statusCode:res.statusCode, responseTime: totalTimeInMs};
        process.stdout.write(JSON.stringify(responseObject)+'\n');

    });
    
    next();
}