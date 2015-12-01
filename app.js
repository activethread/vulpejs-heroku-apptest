'use strict';

module.exports = require('vulpejs')({
  name: 'vulpejs-heroku-apptest',
  routes: {
    load: {
      first: ['index']
    }
  },
  models: {
    load: {
      first: ['user', 'history']
    }
  },
  database: {
    development: {
      host: 'ds059804.mongolab.com',
      port: 59804,
      name: 'apptest',
      auth: {
        source: 'apptest',
        user: 'apptest',
        pass: 'apptest'
      }
    }
  },
  session: {
    mongo: {
      development: {
        host: 'ds059804.mongolab.com',
        port: 59804,
        name: 'apptest',
        collection: 'session',
        auth: {
          source: 'apptest',
          user: 'apptest',
          pass: 'apptest'
        }
      }
    }
  },
  security: {
    routes: [{
      uri: '/**',
      roles: ['SUPER', 'ADMIN']
    }],
    login: {
      skip: []
    }
  },
  minifier: {
    development: false,
    test: false,
    production: true
  },
  debug: {
    development: true,
    test: true,
    production: false
  },
  cluster: {
    development: false,
    test: false,
    production: true
  },
  version: '0.0.1',
  release: 'BETA',
  env: 'development'
});