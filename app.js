const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const boxRoutes = require('./routes/boxRoutes');

const port = process.env.PORT || 3000;

mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(`${err}`));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/suggestions', boxRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


