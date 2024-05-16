const Modes = {
    MAIN: 0,
    SETTING: 1,
    PLAY: 2,
};
const Errors = {
    InvalidMode: 0
};

let mode = Modes.MAIN;

function switchMode(newMode: number) {
    mode = newMode;

    renderScreen();
};

function renderScreen() {
    switch(mode) {
        default:
            error(Errors.InvalidMode);
    }
}

function error(errorCode: number) {
    basic.showNumber(errorCode);
    led.plot(0, 0);
}

switchMode(Modes.MAIN);