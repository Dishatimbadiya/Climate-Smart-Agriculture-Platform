const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./server/routes/router');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(router);

// Error handling middleware
app.use((error, req, res, next) => {
   res.status(error.code || 500);
   res.json({ message: error.message || 'An unknown error occurred!' });
});

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose
   .connect('mongodb+srv://22ceuog056:OVaco8jve5XkUxXG@cluster0.mpuw3.mongodb.net/', {
   })
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Server is running on http://localhost:${PORT}`);
      });
   })
   .catch(err => {
      console.log(err);
   });
