'use strict';

var router = vulpejs.routes.make({
  name: 'user',
  save: {
    data: ['name']
  },
  ui: {
    controller: 'User',
    main: {
      title: 'User',
      inputs: [{
        type: 'email',
        name: 'email',
        label: 'Email',
        readonly: 'vulpejs.item._id',
        required: true
      }, {
        type: 'text',
        name: 'name',
        label: 'Name',
        capitalize: 'all',
        required: true
      }, {
        type: 'password',
        name: 'password',
        label: 'Password',
        readonly: 'vulpejs.item.email === vulpejs.auth.user.email',
        required: '!vulpejs.item._id'
      }, {
        type: 'password',
        name: 'passwordConfirm',
        label: 'Password Confirm',
        readonly: 'vulpejs.item.email === vulpejs.auth.user.email',
        required: '!vulpejs.item._id',
        validate: {
          expression: "'$value == vulpejs.item.password'",
          watch: "'vulpejs.item.password'",
          message: 'Password do not match'
        }
      }]
    },
    select: {
      title: 'User List',
      filter: {
        search: {
          colspan: 2
        },
        status: {
          colspan: 2,
          items: [{
            value: 'ACTIVE',
            label: 'Active'
          }, {
            value: 'INACTIVE',
            label: 'Inactive'
          }, {
            value: 'SUSPENDED',
            label: 'Suspended'
          }]
        }
      },
      items: [{
        name: 'name',
        label: 'Name',
        style: {
          width: '45%'
        }
      }, {
        name: 'email',
        label: 'Email',
        style: {
          width: '30%'
        }
      }, {
        name: 'status',
        css: {
          class: 'text-center'
        },
        images: [{
          name: 'status-online.png',
          show: "vulpejs.equals(item, 'status', 'ACTIVE')",
          title: 'Active'
        }, {
          name: 'status-offline.png',
          show: "vulpejs.equals(item, 'status', 'INACTIVE')",
          title: 'Inactive'
        }],
        label: 'Status',
        style: {
          width: '10%'
        }
      }, {
        label: 'Actions',
        style: {
          width: '25%'
        }
      }],
      actions: []
    }
  }
});

router.get('/password', function(req, res) {
  vulpejs.routes.render(res, 'auto', {
    ui: {
      controller: 'Password',
      title: 'Password Change',
      submit: 'vulpejs.change()',
      inputs: [{
        type: 'email',
        name: 'email',
        label: 'Email',
        readonly: 'vulpejs.item._id'
      }, {
        type: 'text',
        name: 'name',
        label: 'Name',
        readonly: 'vulpejs.item._id',
        capitalize: 'all'
      }, {
        type: 'password',
        name: 'password',
        label: 'Password',
        required: true
      }, {
        type: 'password',
        name: 'passwordConfirm',
        label: 'Password Confirm',
        required: true,
        validate: "'$value == vulpejs.item.password'",
        validateWatch: "'vulpejs.item.password'",
        validateMessage: 'Password do not match'
      }]
    }
  });
});
router.post('/password', function(req, res) {
  vulpejs.models.find({
    model: 'User',
    id: req.body._id,
    callback: function(item) {
      item.password = req.body.password;
      item.save();
      res.status(201).end();
    }
  });
});

module.exports = router;