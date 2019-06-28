const express = require('express');
const TimeConvert = require('../middleware/convert-time')

const router = express.Router();

router.post('/', async (req, res) => {
    const updatedTime = await TimeConvert.convert(req.body.time, req.body.ampm, req.body.zone)
    try {
        console.log(updatedTime)
        res.status(200).json({message: updatedTime})
    } 
    catch(error) {
        res.status(500).json({errorMessage: "Server Error", error})
    }
})

module.exports = router