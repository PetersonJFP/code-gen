const fields = [
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'phone',
    label: 'Phone',
    validations: '[presence()]',
  },
  {
    inputType: 'date',
    cols: 'xs={12} sm={6}',
    type: 'raw',
    name: 'birthDate',
    label: 'Birth Date',
    validations: '[presence()]',
  },
  {
    inputType: 'date',
    cols: 'xs={12} sm={6}',
    type: 'raw',
    name: 'firstKissDate',
    label: 'First Kiss',
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
  name: 'users',
  singularName: 'user',
  fields: fields,
}

export default resource
