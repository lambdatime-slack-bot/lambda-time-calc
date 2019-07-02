module.exports = {
    formatCheck
}

let militaryTime = false
let regularTime = false

function formatCheck(input) {
    if ( /^\d\d:\d\d (pm|am) ..t$/gi.test(input) || /^\d\d (pm|am) ..t$/gi.test(input) || /^\d (pm|am) ..t$/gi.test(input)) {
        regularTime = true
        const [time, ampm, zone] = input.split(' ')
        return {type: 'regularTime', time, ampm, zone}
    }

    else if (/^\d\d:\d\d ..t$/gi.test(input) || (/^\d\d ..t$/gi).test(input) || (/^\d ..t$/gi).test(input)) {
        militaryTime = true
        const [time, zone] = input.split(' ')
        return {type: 'militaryTime', time, zone}
    }
    else if ('') {
        return{type: 'militaryTime', time, zone}
    }
    else if (!input || /^\s$/gi.test(input)) {
        return {type: 'none'}
    }
    else {
        return false
    }
}