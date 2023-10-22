// backend/controllers/dataController.js
const Data = require('../models/dataModels');


exports.getData = async (req, res) => {
  try {
  
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createData = async (req, res) => {
  const { text } = req.body;

  try {
    const data = await Data.create({ text });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    await Data.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
