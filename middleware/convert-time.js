

module.exports = {
    convert
}

function convert (time, ampm, zone) {
    const reply = `${time} Lambda Time occurs at`

    let numbers = time.split(':')
    if (numbers[1]) {
        let date = new Date("1970-01-01 " + time);
        newTime = date
        if (ampm.toLowerCase() === 'pm') {
            newTime.setHours(newTime.getHours() + 12);
        }
    }
    else {
        let date = new Date("1970-01-01 " + time + ':00');
        newTime = date
        if (ampm.toLowerCase() === 'pm') {
            newTime.setHours(newTime.getHours() + 12);
        }
    }

    if (zone === 'PST') {
        return `${reply} ${time} ${zone}`
    }
    else if (zone === 'MST') {
        newTime.setHours(newTime.getHours() - 1);
        newTime = newTime.toString().split(' ')
        newTime = newTime[4].split(':')
        newTime.pop()
        if (newTime[0] > 12) {
            newTime[0] -= 12
            newTime = newTime.join(':') + 'PM'
        }
        else {
            newTime = newTime.join(':') + 'AM'
        }
        return `${reply} ${newTime} ${zone}`
    }
    else if (zone === 'CST') {
        newTime.setHours(newTime.getHours() - 2);
        newTime = newTime.toString().split(' ')
        newTime = newTime[4].split(':')
        newTime.pop()
        if (newTime[0] > 12) {
            newTime[0] -= 12
            newTime = newTime.join(':') + 'PM'
        }
        else {
            newTime = newTime.join(':') + 'AM'
        }
        return `${reply} ${newTime} ${zone}`
    }
    else if (zone === 'EST') {
        newTime.setHours(newTime.getHours() - 3);
        newTime = newTime.toString().split(' ')
        newTime = newTime[4].split(':')
        newTime.pop()
        if (newTime[0] > 12) {
            newTime[0] -= 12
            newTime = newTime.join(':') + 'PM'
        }
        else {
            newTime = newTime.join(':') + 'AM'
        }
        return `${reply} ${newTime} ${zone}`    
    }
    else {
        return `${reply} ${time} ${zone}`
    }
}