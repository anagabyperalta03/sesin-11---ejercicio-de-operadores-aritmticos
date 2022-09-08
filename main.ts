let _1_numero = 0
let _2_numero = 0
let numero_aleatorio = 0
let farenheit = 0
input.onButtonPressed(Button.A, function () {
    _1_numero = randint(0, 10)
    basic.showNumber(_1_numero)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    _2_numero = randint(0, 10)
    basic.showNumber(_2_numero)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(_1_numero + _2_numero)
})
input.onButtonPressed(Button.B, function () {
    numero_aleatorio = randint(0, 10)
    basic.showNumber(numero_aleatorio)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # # #
        . . # . .
        . . # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    farenheit = numero_aleatorio * (1.8 + 32)
    basic.showNumber(farenheit)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . . # # #
        . . # . .
        . . # # .
        . . # . .
        `)
    basic.pause(100)
})
basic.forever(function () {
	
})
