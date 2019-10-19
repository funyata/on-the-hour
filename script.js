const sleep = time => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

const timer = async (date, callback) => {
    while (true) {
        await sleep(300);
        const now = new Date();
        if (date.getTime() < now.getTime()) break;
    }
    
    callback();
};

const loop = async () => {
    while(true) {
        const nextTime = new Date();
        nextTime.setHours(nextTime.getHours() + 1, 0, 0);
        document.querySelector("#until").innerText = `${nextTime.getHours()}:00に通知します。`
        await timer(nextTime, () => {new Notification(`${nextTime.getHours()}:00`)});
    }
};

loop();
