'use strict';

module.exports = vulpejs.routes.make({
  name: 'city',
  plural: 'cities',
  populate: 'state.country',
  save: {
    data: ['name', 'acronym', 'state']
  },
  list: {
    sort: {
      name: 1
    }
  },
  ui: {
    controller: {
      name: 'City',
      service: {
        plural: 'cities',
        predicate: 'name',
        focus: 'name',
        messages: {
          validate: {
            exists: 'City already exists.'
          }
        },
        model: {
          name: '',
          acronym: '',
          state: '',
          country: '',
          status: 'ACTIVE'
        },
        load: {
          arrays: [{
            from: '/states/status/ACTIVE',
            to: 'states'
          }]
        },
        menu: {
          active: 'city'
        }
      }
    },
    main: {
      title: 'City',
      inputs: [{
        type: 'text',
        name: 'name',
        label: 'Name',
        capitalize: 'first',
        required: true
      }, {
        type: 'text',
        name: 'acronym',
        label: 'Acronym',
        case: 'upper',
        required: true
      }, {
        type: 'select',
        name: 'state',
        label: 'State',
        options: [{
          value: '',
          label: 'Select a state'
        }],
        items: {
          name: 'states',
          value: '_id',
          label: 'name'
        },
        required: true
      }]
    },
    select: {
      title: 'City List',
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
          }]
        }
      },
      items: [{
        name: 'name',
        label: 'Name',
        style: {
          width: '55%'
        }
      }, {
        name: 'acronym',
        label: 'Acronym',
        style: {
          width: '10%'
        }
      }, {
        name: 'status',
        css: {
          'class': 'text-center'
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