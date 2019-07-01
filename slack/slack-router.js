const express = require('express');
const NewTimeConvert = require('../middleware/convert-time-moment')
const FormatCheck = require('../middleware/formatCheck')

const router = express.Router();

router.post('/', async (req, res) => {
    const formatCheck = await FormatCheck.formatCheck(req.body.text)
    console.log(formatCheck)
    if (formatCheck.type === 'militaryTime' || formatCheck.type === 'regularTime') {
        const newUpdatedTime = await NewTimeConvert.toTimeZone(formatCheck.time, formatCheck.ampm, formatCheck.zone, formatCheck.type)

        try {
            res.status(200).json({text: newUpdatedTime})
        } 
        catch(error) {
            console.log(error)
            res.status(500).json({errorMessage: "Server Error", error})
        }
    }
    else {
        res.status(200).json({text: "Please check format. Input should be shaped like this: `12:00 pm edt` or `22:30 edt`"})
    }
})

module.exports = router