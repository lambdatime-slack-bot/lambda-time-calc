module.exports = {
    formatCheck
}

let militaryTime = false
let regularTime = false

function formatCheck(input) {
    if ( /\d\d:\d\d (pm|am) ..t/g.test(input) || /\d\d (pm|am) ..t/g.test(input) || /\d (pm|am) ..t/g.test(input)) {
        regularTime = true
        const [time, ampm, zone] = input.split(' ')
        return {type: 'regularTime', time, ampm, zone}
    }

    else if (/\d\d:\d\d ..t/g.test(input) || (/^\d\d ..t/g).test(input) || (/\d ..t/g).test(input)) {
        militaryTime = true
        const [time, zone] = input.split(' ')
        return {type: 'militaryTime', time, zone}
    }
    else {
        return false
    }
}