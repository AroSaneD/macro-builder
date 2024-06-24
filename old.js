import robotjs from 'robotjs';

function invokeClick(i) {
    console.log('invoking click ', i);
    setTimeout(() => {
        console.log('click ', i);
        robotjs.mouseClick('right', false);
    }, i);
}

function invokeShift(i) {
    console.log('invoking click ', i);
    setTimeout(() => {
        console.log('click ', i);
        robotjs.keyTap('shift');
    }, i);
}

function spamRightClick(delay = 5000) {
    setTimeout(() => {
        let i = 0;
        let clickCount = 4000
        while(i++<clickCount) {
            invokeClick(i);
        }
    }, delay);
}

function spamShift(delay = 5000) {
    setTimeout(() => {
        let i = 0;
        let clickCount = 400
        while(i++<clickCount) {
            invokeShift(i*10);
        }
    }, delay);
}

// spamShift();

function spamFarm(delay=5000) {
    setTimeout(() => {
        robotjs.mouseToggle('down', 'right');
        robotjs.keyToggle('`', 'down');
        let i = 0;
        let farmCount = 400;
        while(i++<farmCount) {
            console.log('Click count', i);
            robotjs.keyTap('shift');
            robotjs.mouseClick('right');
        }
        robotjs.keyToggle('`', 'up');
        robotjs.mouseToggle('up', 'right');

    }, delay);
}

console.log('args: ', process.argv);
const args = process.argv;

const hasShift = args.some(a => a == '--shift');
const hasRmb = args.some(a => a == '--rmb');
const hasFarm = args.some(a => a == '--farm');

robotjs.setKeyboardDelay(2);
robotjs.setMouseDelay(2);
if (hasShift) {
    // console.log('Spamming shift');
    spamShift();
} else if (hasRmb) {
    // console.log('Spamming rmb');
    spamRightClick();
} else if (hasFarm) {
    spamFarm();
}
