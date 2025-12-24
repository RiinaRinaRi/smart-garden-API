<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

require("./services/mqtt.service");

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/devices", require("./routes/device.route"));
app.use("/api/sensors", require("./routes/sensor.route"));
app.use("/api/control", require("./routes/control.route"));
app.use("/api/dashboard", require("./routes/dashboard.route"));
app.use("/api/alerts", require("./routes/alert.route"));
app.use('/v1/data', require('./routes/data.route'));
app.use('/v1/house', require('./routes/house.route'));

app.listen(process.env.PORT, () =>
  console.log("Smart Garden API running")
);
