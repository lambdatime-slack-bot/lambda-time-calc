const express = require('express');
const NewTimeConvert = require('../middleware/convert-time-moment')
const FormatCheck = require('../middleware/formatCheck')

const router = express.Router();

router.post('/', async (req, res) => {
    const formatCheck = await FormatCheck.formatCheck(req.body.text)
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
        res.status(200).json({text: "Usage: `/lambdatime 11:30 pm edt`"})
    }
})

module.exports = router
