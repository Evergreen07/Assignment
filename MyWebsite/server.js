const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const route = require('./routes/registerRoute')

// app.use(cors);
app.use(express.json({extended : false}));

//Connecting to Database
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

mongoose.connection.on('connected', () => {
    console.log('Database Connected');
})

//App routes
app.use(route);
app.use('/register', require('./routes/registerRoute'));
app.use('/getUsers', require('./routes/registerRoute'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));