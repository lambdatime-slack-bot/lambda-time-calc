module.exports = {
    formatCheck
}

function formatCheck(input) {
    if ( /\d\d:\d\d/g.test(input) || /\d\d/g.test(input)) {
        return true
    }
    else {
        return false
    }
}