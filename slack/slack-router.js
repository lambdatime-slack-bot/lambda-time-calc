const express = require('express');
const TimeConvert = require('../middleware/convert-time')
const NewTimeConvert = require('../middleware/convert-time-moment')

const router = express.Router();

router.post('/', async (req, res) => {
    // const updatedTime = await TimeConvert.convert(req.body.time, req.body.ampm, req.body.zone)
    const [time, ampm, zone] = req.body.text.split(' ')
    const newUpdatedTime = await NewTimeConvert.toTimeZone(time, ampm, zone)

    try {
        // console.log(newUpdatedTime)
        res.status(200).json({text: newUpdatedTime})
    } 
    catch(error) {
        console.log(error)
        res.status(500).json({errorMessage: "Server Error", error})
    }
})

module.exports = router