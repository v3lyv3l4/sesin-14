let N1 = 0
let N2 = 0
let N3 = 0
input.onButtonPressed(Button.A, function () {
    if (N1 == 0 && N2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    N3 = randint(0, 9)
    N2 = randint(0, 9)
    N1 = randint(0, 9)
    if (N1 != N2 && (N2 != N3 && N3 != N1)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(N3)
        basic.showNumber(N2)
        basic.showNumber(N1)
    } else {
        basic.showIcon(IconNames.No)
        N3 = 0
        N2 = 0
        N1 = 0
    }
})
