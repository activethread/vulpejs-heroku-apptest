'use strict';

/**
 * City Model
 * 
 * @param   {Object} mongoose Mongoose
 * @return {Object} Model
 */
module.exports = vulpejs.models.make({
  name: 'City',
  schema: {
    name: {
      type: String,
      required: true
    },
    acronym: {
      type: String,
      required: true
    },
    state: {
      type: vulpejs.mongoose.Schema.Types.ObjectId,
      ref: 'State'
    },
    date: {
      type: Date,
      'default': Date.now
    },
    modified: {
      type: Date,
      'default': Date.now
    },
    status: {
      type: String,
      required: true,
      'default': 'ACTIVE',
      enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED']
    },
    user: {
      type: vulpejs.mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
});