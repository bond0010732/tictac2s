const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for device registration
const deviceSchema = new Schema({
  expoPushToken: {
    type: String,
    required: true,
    unique: true // Ensure that each device has a unique token
  },
   apnsToken: { type: String, unique: true, sparse: true }, 
  users: [{
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  }]
});

// Create a model from the schema
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
