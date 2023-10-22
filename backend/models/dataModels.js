const mongoose = require('mongoose');
// Define the schema for the data
const dataSchema = new mongoose.Schema({
 
  text: {
    type: String,
    required: true,
  },
});
// Create the Data model
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;