const moment = require('moment')
const tz = require('moment-timezone')

module.exports = {
    toTimeZone
}


function toTimeZone(time, ampm, zone) {
    const reply = `${time} Lambda Time occurs at`
    time = time.split(':')
    time[0].padStart(2, 0)
    if (ampm.toUpperCase() === 'PM' && time[0] < 12) {
        time[0] = parseInt(time[0]) + 12
        time[0] = time[0].toString()
    }
    time = time.join(':')
    let newTime = moment.tz("1970-06-01 " + time , 'America/Los_Angeles')

    switch(zone.toLowerCase()) {
        case 'mdt': 
            phoenixNewTime = newTime.tz('America/Phoenix').format('h:mma z')
            newTime = newTime.tz('America/Denver').format('h:mma z')
            return `${reply} ${newTime} Note: If you are in Phoenix, Lambda Time actually occurs at ${phoenixNewTime}`

        case 'cdt':
            newTime = newTime.tz('America/Chicago').format('h:mma z')
            return `${reply} ${newTime}`

        case "edt":
            newTime = newTime.tz('America/New_York').format('h:mma z')
            return `${reply} ${newTime}`

        default: 
            return `Sorry, we haven't added support for your time zone yet`

    }
}