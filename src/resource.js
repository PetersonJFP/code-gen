const fields = [
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'name',
    label: 'Name',
    validations: '[presence(), name()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'email',
    label: 'Email',
    validations: '[presence(), email()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'phone',
    label: 'Phone Number',
  },
  {
    inputType: 'date',
    cols: 'xs={12} sm={6}',
    type: 'raw',
    name: 'date',
    label: 'Birth Date',
    validations: '[presence()]',
  },
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shape',
    label: 'Diamond Shape',
    validations: '[presence()]',
    options:[
      { label: 'RB', value: 'round' },
      { label: 'CB', value: 'cushion_brilliant' },
      { label: 'CMB', value: 'cushion_modified_brilliant' }
    ]
  },
]

const resource = {
  name: 'curations',
  path: '/offers',
  fields: fields,
}

export default resource
