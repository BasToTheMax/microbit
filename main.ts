let count = 0;
radio.setGroup(1);

let p1 = game.createSprite(2, 2);

basic.forever(function () {
    basic.showNumber(count);

    basic.pause(1000);

    p1.move(1);
    p1.setDirection(count);
    count++;
    radio.sendNumber(count);
});
radio.onReceivedNumber((c) => {
    count = c;
});