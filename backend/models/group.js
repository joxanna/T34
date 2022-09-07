const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      members: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }],
      admins: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
      }]

    }
  );
  
  const Group = model('Group', groupSchema);
  module.exports = { Group };