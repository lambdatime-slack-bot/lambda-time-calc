const express = require('express');
const NewTimeConvert = require('../middleware/convert-time-moment')
const FormatCheck = require('../middleware/formatCheck')

const router = express.Router();

router.post('/', async (req, res) => {
    const [time, ampm, zone] = req.body.text.split(' ')
    const formatCheck = await FormatCheck.formatCheck(req.body.text)
    if (formatCheck === true) {
        const newUpdatedTime = await NewTimeConvert.toTimeZone(time, ampm, zone)

        try {
            res.status(200).json({text: newUpdatedTime})
        } 
        catch(error) {
            console.log(error)
            res.status(500).json({errorMessage: "Server Error", error})
        }
    }
    else {
        res.status(500).json({text: "Please check format"})
    }
})

module.exports = router