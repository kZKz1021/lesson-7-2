function back90run () {
    wuKong.setAllMotor(-100, -100)
    basic.pause(1000)
    wuKong.setAllMotor(80, 0)
    basic.pause(500)
    wuKong.setAllMotor(80, 80)
    basic.pause(1000)
}
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1) {
        back90run()
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 || pins.digitalReadPin(DigitalPin.P2) == 0) {
        wuKong.setAllMotor(50, 0)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8) > 0 && sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8) <= 15) {
        wuKong.setAllMotor(48, 100)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8) > 15 && sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8) <= 30) {
        wuKong.setAllMotor(100, 100)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
})
