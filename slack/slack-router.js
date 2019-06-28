const express = require('express');
const TimeConvert = require('../middleware/convert-time')
const NewTimeConvert = require('../middleware/convert-time-moment')

const router = express.Router();

router.post('/', async (req, res) => {
    // const updatedTime = await TimeConvert.convert(req.body.time, req.body.ampm, req.body.zone)
    // const newUpdatedTime = await NewTimeConvert.toTimeZone(req.body.time, req.body.ampm, req.body.zone)

    try {
        // console.log(newUpdatedTime)
        console.log('req.params.text', req.params.text)
        console.log('request', req)
        console.log('req.body.text', req.body.text)
        res.status(200).json({text: 'hello world'})
    } 
    catch(error) {
        console.log(error)
        res.status(500).json({errorMessage: "Server Error", error})
    }
})

module.exports = router