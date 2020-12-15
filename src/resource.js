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
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-shank-metal-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-shank-metal-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },
  
  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-head-metal-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-head-metal-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-finger-size-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-finger-size-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-ring-design-description-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-ring-design-description-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-prongs-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-prongs-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-prong-security-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-prong-security-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-porosity-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-porosity-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-does-melee-match-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-does-melee-match-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-ring-design-notes-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-ring-design-notes-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-engravings-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-engravings-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'select',
    cols: 'xs={12} sm={6} md={4}',
    type: 'text',
    name: 'ring-quality-control-other-reason-reject-accepted',
    label: 'Accept?',
    validations: '[presence()]',
    options:[
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Not applicable', value: 'Not applicable' },
    ]
  },
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'ring-quality-control-other-reason-reject-reason',
    label: 'If rejected, why?',
    validations: '[presence()]',
  },

  {
    inputType: 'date',
    cols: 'xs={12}',
    type: 'raw',
    name: 'ring_production_due_date',
    label: 'Due date',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'ring-quality-control-final-ring-price',
    label: 'Final ring price',
    validations: '[presence()]',
  },
]

const resource = {
  name: 'curations',
  singularName: 'curation',
  fields: fields,
}

export default resource
