// ##############################
// ##### number, simple text [string]
// ##############################
// {
//   inputType: 'text',
//   cols: 'xs={12}',
//   type: 'text',
//   name: 'name',
//   label: 'Your name',
//   validations: '[presence()]',
// },
// ##############################
// ##### date field [datepicker]
// ##############################
// {
//   inputType: 'date',
//   cols: 'xs={12} sm={6}',
//   type: 'raw',
//   name: 'firstKissDate',
//   label: 'First Kiss',
//   validations: '[presence()]',
// },
// ##############################
// ##### simple select
// ##############################
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
// ##############################
// ##### number, decimal, monetary, etc
// ##############################
// {
//   inputType: 'text',
//   cols: 'xs={12} sm={6}',
//   type: 'text',
//   subType: 'number',
//   name: 'ring-quality-control-final-ring-price',
//   label: 'Final ring price',
//   validations: '[presence()]',
// },

const fields = [
  {
    inputType: 'text',
    cols: 'xs={12}',
    type: 'text',
    name: 'full_payment_received',
    label: 'Full payment received',
    validations: '[presence()]',
  },
  {
    inputType: 'date',
    cols: 'xs={12} sm={6}',
    type: 'raw',
    name: 'arrival_at',
    label: 'Arrival date',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_company',
    label: 'Company',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_first_name',
    label: 'First name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_last_name',
    label: 'Last name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_line_1',
    label: 'Address',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_line_2',
    label: 'Address continued',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_city',
    label: 'City',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_state',
    label: 'State',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_zip_code',
    label: 'Zip',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'shipping_address_country',
    label: 'Country',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'use_shipping_address_on_appraisal',
    label: 'Appraisal address is the same as the shipping address',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_first_name',
    label: 'First name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_last_name',
    label: 'Last name',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_address',
    label: 'Address',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_address_continued',
    label: 'Address continued',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_city',
    label: 'City',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_state',
    label: 'State',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_zip_code',
    label: 'Zip',
    validations: '[presence()]',
  },
  {
    inputType: 'text',
    cols: 'xs={12} sm={6}',
    type: 'text',
    name: 'appraisal_country',
    label: 'Country',
    validations: '[presence()]',
  },
]

const resource = {
  name: 'curations',
  singularName: 'curation',
  fields: fields,
}

export default resource
