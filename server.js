const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const fs = require('fs');
const path = require("path");
const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming json data
app.use(express.json());
// allows css and js files to be accessed through public folder
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static("public"))

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });