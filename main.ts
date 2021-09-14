input.onButtonPressed(Button.A, function () {
	
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
input.onButtonPressed(Button.B, function () {
	
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
