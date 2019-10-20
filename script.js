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

const view = {};
view.next = date => {
    const next = document.querySelector("#next");
    next.innerHTML = `${date.getHours()}:00に通知します。`;  
};

view.log = date => {
    const log = document.querySelector("#log");
    const div = document.createElement("div");
    div.innerHTML = `${date.getHours()}:00に通知しました。`;
    log.appendChild(div);
};

const loop = async () => {
    while(true) {
        const nextTime = new Date();
        nextTime.setHours(nextTime.getHours() + 1, 0, 0);
        view.next(nextTime);
        await timer(nextTime, () => {new Notification(`${nextTime.getHours()}:00`)});
        view.log(nextTime);
    }
};

loop();
