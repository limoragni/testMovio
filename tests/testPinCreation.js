const assert     = require('assert')
const methods    = require('../index.js')
const expect     = require("chai").expect

describe('Testing function', () => {
    const pins = methods.generatePINs()

    it('should return 1000 numbers', () => {
        expect(pins.length).to.equal(1000)
    })

    it('Should not be two consecutive equal numbers', () => {
        pins.forEach(pin => {
            expect(methods.checkContigousEquality(pin)).to.equal(false)
        })
    })

    it('Should not be three consecutive incremetal numbers', () => {
        pins.forEach(pin => {
            expect(methods.checkConsecutiveIncrements(pin)).to.equal(false)
        })
    })
})