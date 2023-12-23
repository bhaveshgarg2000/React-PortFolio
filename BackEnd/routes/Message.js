const express = require('express');
const router = express.Router();
const Message = require('../Model/UserMessage')
// root route
router.get('/', (req, res) => {
    res.send(" Root Route");
})


// get Messages
router.get('/get', async (req, res) => {
    try {
        const GetMessages = await Message.find();
        res.send(GetMessages);
    } catch (err) {
        res.send(err)
    }
})



// POST API
router.post('/contact', async (req, res) => {
    try {
        const Mess = new Message(req.body);
        const SaveMessage = await Mess.save();
        res.status(201).send(SaveMessage);
    } catch (err) {
        res.status(400).send(err); // Use a more appropriate status code, like 400 Bad Request
    }
});
module.exports = router