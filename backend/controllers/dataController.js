const Polling = require("../models/city");

const getData = async (req, res, next) => {
  const { population, cityType, city } = req.query;


  let sortPopulation =
  population == "asc" ? 1 : population == "desc" ? -1 : 0;

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  

  if (cityType != undefined && city == undefined) {
    const DataCount = await Polling.countDocuments(
      {
        cityType: { $regex: cityType },
      },
      (err) => {
        if (err) console.log(err);
      }
    );

    const finalPage = Math.ceil(DataCount / limit);

    try {
      const results = await Polling.find({
        cityType: { $regex: cityType },
      })
        .sort({ population: sortPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (cityType == undefined && city != undefined) {
    const DataCount = await Polling.countDocuments(
      {
        city: { $regex: city },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(DataCount / limit);
    try {
      const results = await Polling.find({
        city: { $regex: city },
      })
        .sort({ population: sortPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (city != undefined && cityType != undefined) {
    const DataCount = await Polling.countDocuments(
      {
        city: { $regex: city },
        cityType: { $regex: cityType },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(DataCount / limit);
    try {
      const results = await Polling.find({
        city: { $regex: city },
        cityType: { $regex: cityType },
      })
        .sort({ population: sortPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else {
    const DataCount = await Polling.countDocuments({}, (err) => {
      if (err) console.log(err);
    });

    const finalPage = Math.ceil(DataCount / limit);

    try {
      const results = await Polling.find({})
        .sort({ population: sortPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }
};

const cityData = (req, res) => {
  console.log(req.query.id);
  Polling.findById(req.query.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
};

module.exports = { getData, cityData };
