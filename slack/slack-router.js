const express = require('express');
const TimeConvert = require('../middleware/convert-time')
const NewTimeConvert = require('../middleware/convert-time-moment')

const router = express.Router();

router.post('/', async (req, res) => {
    // const updatedTime = await TimeConvert.convert(req.body.time, req.body.ampm, req.body.zone)
    const newUpdatedTime = await NewTimeConvert.toTimeZone(req.body.time, req.body.ampm, req.body.zone)

    try {
        console.log(newUpdatedTime)
        console.log(req.body)
        res.status(200).json({message: newUpdatedTime})
    } 
    catch(error) {
        console.log(error)
        res.status(500).json({errorMessage: "Server Error", error})
    }
})

module.exports = router