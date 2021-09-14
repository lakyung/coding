input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . # . .
        `)
})
basic.forever(function () {
    if (37 < input.temperature()) {
        music.playMelody("C5 C5 C5 - - - - - ", 407)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
