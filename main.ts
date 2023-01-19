input.onButtonPressed(Button.A, function () {
    basic.showString("USSR")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C G B E F G C5 A ", 150)
    music.playMelody("C A E C5 G D B C ", 150)
    music.playMelody("B D A E F C5 B C5 ", 150)
})
basic.forever(function () {
	
})
