module.exports = {
  ComponentSchema: [{
    name: 'Sites',
    ParentGroup: 'root',
    group: 'sites',
    order: 2,
  }, {
    name: 'Defaults',
    ParentGroup: 'root',
    group: 'defaults',
    order: 1,
    properties: [
      {
        name: 'cpu',
        type: 'int',
        isMandatory: false,
      }
    ],
  }, {
    name: 'Site',
    ParentGroup:'sites',
    group: 'site',
    order: 1,
    properties: [
      {
        name: 'id',
        type: 'string',
        isMandatory: true,
      }
    ],
    isMany: true,
  }]
}