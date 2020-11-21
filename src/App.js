import React from "react";
import './app.css'
import InitialValues from './InitialValues'
import Fields from './Fields'

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
    validations: '[presence(), phone()]',
  },
  {
    inputType: 'date',
    cols: 'xs={12} sm={6}',
    type: 'raw',
    name: 'date',
    label: 'Birth Date',
    validations: '[presence(), phone()]',
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

function App() {
  return (
    <>
      <Fields fields={fields}/>
      <InitialValues fields={fields}/>
    </>
  );
}

export default App;