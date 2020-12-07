// {
//   inputType: 'text',
//   cols: 'xs={12}',
//   type: 'text',
//   name: 'phone',
//   label: 'Phone',
//   validations: '[presence()]',
// },
// {
//   inputType: 'date',
//   cols: 'xs={12} sm={6}',
//   type: 'raw',
//   name: 'firstKissDate',
//   label: 'First Kiss',
//   validations: '[presence()]',
// },
// {
//   inputType: 'select',
//   cols: 'xs={12} sm={6}',
//   type: 'text',
//   name: 'shape',
//   label: 'Diamond Shape',
//   validations: '[presence()]',
//   options:[
//     { label: 'RB', value: 'round' },
//     { label: 'CB', value: 'cushion_brilliant' },
//     { label: 'CMB', value: 'cushion_modified_brilliant' }
//   ]
// },

const fields = [
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ringHeadMetal',
    label: 'Head Metal',
    validations: '[presence()]',
    options:[
      { label: '14k White', value: '14k White' },
    ]
  },
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ringShankMetal',
    label: 'Shank Metal',
    validations: '[presence()]',
    options:[
      { label: '14k White', value: '14k White' },
    ]
  },
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ringProngs',
    label: 'Prongs',
    validations: '[presence()]',
    options:[
      { label: '14k White', value: '14k White' },
    ]
  },
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ringFingerSize',
    label: 'Finger size',
    validations: '[presence()]',
    options:[
      { label: '2.00', value: '2.00' },
      { label: '13.00', value: '13.00' },
    ]
  },
  {
    inputType: 'select',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ringDesignDescription',
    label: 'Ring design description',
    validations: '[presence()]',
    options:[
      { label: 'foo', value: 'foo' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ringDesignNotes',
    label: 'Ring design notes',
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ringEngravings',
    label: 'Engravings',
    validations: '[presence()]',
  },
]

const resource = {
  name: 'offers',
  singularName: 'offer',
  fields: fields,
}

export default resource
