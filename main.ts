input.onButtonPressed(Button.A, function () {
    if (opcion != 2) {
        opcion += 1
    } else {
        opcion = 0
    }
    mostrarOpcion(opcion)
})
function mostrarOpcion (núm: number) {
    if (opcion == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (opcion == 1) {
        basic.showIcon(IconNames.Ghost)
    } else if (opcion == 2) {
        basic.showIcon(IconNames.LeftTriangle)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(opcion)
})
input.onButtonPressed(Button.B, function () {
    if (opcion != 0) {
        opcion += -1
    } else {
        opcion = 2
    }
    mostrarOpcion(opcion)
})
let opcion = 0
opcion = 0
mostrarOpcion(opcion)
