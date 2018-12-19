/**
 * Custom blocks
 */
//% weight=100 color=#0fbc41 icon=""
namespace gigabitDisplay {
    /**
     * makes the gigabit display the same as the micro:bit
     */
    //% blockId="gigabitDisplay" 
    //% block="mirror display on gigabit at pin %pin"
    export function mirrorDisplayOnGigabit(pin: DigitalPin): void {
        let item = neopixel.create(pin, 25, NeoPixelMode.RGB)
        control.inBackground(function () {
            while (true) {
                for (let i = 0; i <= 25 - 1; i++) {
                    if (led.point(4 - i % 5, i / 5)) {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
                    } else {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Black))
                    }
                }
                basic.pause(10)
                let brightness = led.brightness()
                item.setBrightness(brightness)
                item.show()
            }
        })
    }
}
