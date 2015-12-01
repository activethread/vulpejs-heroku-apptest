'use strict';

/**
 * State Model
 * 
 * @param   {Object} mongoose Mongoose
 * @return {Object} Model
 */
module.exports = vulpejs.models.make({
  name: 'State',
  schema: {
    name: {
      type: String,
      required: true
    },
    acronym: {
      type: String,
      required: true
    },
    country: {
      type: vulpejs.mongoose.Schema.Types.ObjectId,
      ref: 'Country'
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