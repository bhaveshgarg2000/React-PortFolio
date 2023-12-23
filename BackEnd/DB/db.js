process.setMaxListeners(15);
const mongoose = require('mongoose');
// const uri = "mongodb+srv://bhaveshgarg2005:BHAVESH$GARG1234@cluster0.jocbjwh.mongodb.net/mydatabase?retryWrites=true&w=majority";
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });