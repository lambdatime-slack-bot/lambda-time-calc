const moment = require('moment')
const tz = require('moment-timezone')

module.exports = {
    toTimeZone
}


function toTimeZone(time, ampm, zone, type) {
    const reply = `${time} Lambda Time occurs at`

    time = time.split(':')
    time[0] = time[0].padStart(2, 0)
    if (type === 'regularTime' && ampm.toUpperCase() === 'PM' && time[0] < 12) {
        time[0] = parseInt(time[0]) + 12
    }
    time[0] = time[0].toString()
    time = time.join(':')
    let newTime = moment.tz(Date.now(), 'America/Los_Angeles').isDST() ? moment.tz("1970-06-01 " + time , 'America/Los_Angeles') : moment.tz("1970-01-01 " + time , 'America/Los_Angeles')

    switch(zone.toLowerCase()) {
        case 'mdt':
        case 'mst':
        case 'mt':
            phoenixNewTime = newTime.tz('America/Phoenix').format('h:mma z')
            newTime = newTime.tz('America/Denver').format('h:mma z')
            return `${reply} ${newTime} Note: If you are in Phoenix, Lambda Time actually occurs at ${phoenixNewTime}`

        case 'cdt':
        case 'cst':
        case 'ct':
            newTime = newTime.tz('America/Chicago').format('h:mma z')
            return `${reply} ${newTime}`

        case "edt":
        case 'est':
        case 'et':
            newTime = newTime.tz('America/New_York').format('h:mma z')
            return `${reply} ${newTime}`

        default: 
            return `Sorry, we haven't added support for your time zone yet`

    }
}