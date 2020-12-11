const mongoose = require("mongoose");

const pollingStaionSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    cityType: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    noOfPollingStations: {
      type: Number,
      required: true,
    },
    pollingStationNames: {
      type: Array,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("pollingStation", pollingStaionSchema);
