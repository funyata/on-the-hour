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
    const next = document.querySelector("#next");
    const log = document.querySelector("#log");
    
    while(true) {
        const nextTime = new Date();
        nextTime.setHours(nextTime.getHours() + 1, 0, 0);
        next.innerText = `${nextTime.getHours()}:00に通知します。`
        await timer(nextTime, () => {new Notification(`${nextTime.getHours()}:00`)});
        const div = document.createElement("div");
        div.innertText = `${nextTime.getHours()}:00に通知しました。`;
        log.appendChild(div);
    }
};

loop();
