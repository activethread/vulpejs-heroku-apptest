'use strict';

module.exports = vulpejs.routes.make({
  name: 'country',
  plural: 'countries',
  save: {
    data: ['name', 'acronym', 'code']
  },
  list: {
    sort: {
      name: 1
    }
  },
  ui: {
    controller: {
      name: 'Country',
      service: {
        name: 'country',
        plural: 'countries',
        predicate: 'name',
        focus: 'name',
        model: {
          name: '',
          acronym: '',
          code: '',
          status: 'ACTIVE'
        },
        menu: {
          active: 'country'
        }
      }
    },
    main: {
      title: 'Country',
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
        type: 'text',
        name: 'code',
        label: 'Code',
        only: 'numeric',
        required: true
      }]
    },
    select: {
      title: 'Country List',
      filter: {
        search: {
          colspan: 3
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
          width: '45%'
        }
      }, {
        name: 'acronym',
        label: 'Acronym',
        style: {
          width: '10%'
        }
      }, {
        name: 'code',
        label: 'Code',
        style: {
          width: '10%'
        }
      }, {
        name: 'status',
        className: 'text-center',
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