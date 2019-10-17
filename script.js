const sleep = time => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};
const log = [];

const loop = async () => {
    log.push(new Date());

    while(true) {
        await sleep(1000);
        const now = new Date();
        const hasBeeped = log.filter(t => t.getDate() === now.getDate() && t.getHours() === now.getHours()).length >= 1;
        debugger;
//             console.log(`hasBeeped: ${hasBeeped}`);
//             log.forEach(t => console.log(t));
        if (hasBeeped) continue;
        log.push(now);
        new Notification(`${now.getHours()}:00`);
    }
};

loop();
