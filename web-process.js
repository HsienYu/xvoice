const { By } = require("selenium-webdriver");

const Controller = require("./controller");

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};
require("events").EventEmitter.defaultMaxListeners = 100;
//require("events").EventEmitter.prototype._maxListeners = 100;

let controller = new Controller();

let display_width = 1920;
let display_height = 1080;
let page_flag = 0;
//remove all focus function for linux platform
let task = {
    0: {
        action: async () => {
            if (page_flag == 0) {
                page_flag = 1;
                await controller.goTo(
                    13,
                    "https://www.google.com/search?q=world%20news&tbm=isch&hl=en&hl=en&tbs=qdr:d&client=ubuntu&hs=OJ7&sa=X&ved=0CAIQpwVqFwoTCODSq6-yluwCFQAAAAAdAAAAABAC&biw=1797&bih=1370"
                );
                await controller.setBrowserRect(13, {
                    x: 0,
                    y: 0,
                    width: display_width,
                    height: display_height,
                });
                controller.SCROLL_GAP = 1;
                controller.SCROLL_INTERVAL = 10;
                controller.scrollTo(13, 9000);
            } else {
                await controller.breakScroll(19);
                await controller.closeBrowser(19);
                await controller.goTo(
                    13,
                    "https://www.google.com/search?q=world%20news&tbm=isch&hl=en&hl=en&tbs=qdr:d&client=ubuntu&hs=OJ7&sa=X&ved=0CAIQpwVqFwoTCODSq6-yluwCFQAAAAAdAAAAABAC&biw=1797&bih=1370"
                );
                controller.scrollTo(13, 9000);
            }
        },
    },
};

async function callTask(t) {
    if (!task[t]) {
        return;
    }
    task[t].action();
}

process.on("message", function (args) {
    console.log(args);
    let currentTime = args["currentTime"];
    (async () => callTask(currentTime))();
});