'use strict';

module.exports = vulpejs.routes.make({
  name: 'state',
  save: {
    data: ['name', 'acronym', 'country']
  },
  list: {
    sort: {
      name: 1
    }
  },
  ui: {
    controller: {
      name: 'State',
      service: {
        name: 'state',
        predicate: 'name',
        focus: 'name',
        model: {
          name: '',
          acronym: '',
          country: '',
          status: 'ACTIVE'
        },
        load: {
          arrays: [{
            from: '/countries/status/ACTIVE',
            to: 'countries'
          }]
        },
        menu: {
          active: 'state'
        }
      }
    },
    main: {
      title: 'State',
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
        name: 'country',
        label: 'Country',
        options: [{
          value: '',
          label: 'Select a country'
        }],
        items: {
          name: 'countries',
          value: '_id',
          label: 'name'
        },
        required: true
      }]
    },
    select: {
      title: 'State List',
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