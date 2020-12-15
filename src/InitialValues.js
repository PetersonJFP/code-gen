import React from 'react'
import {camelCase} from 'lodash'

const InitialValues = ({fields}) => {
  const getInitialValue = field => {
    switch (field.inputType) {
      case 'date':
        return 'null'
  
      default:
        return '\'\''
    }
  }
  
  const initialValues = `
    export default {
      ${fields.map(field => 
        `${camelCase(field.name)}: ${getInitialValue(field)},`
      ).join('\n')}
    }
  `

  return (
    <>
      <h1>create/initialValues.js</h1>
      <pre>
        {initialValues}
      </pre>  
    </>
  );
}

InitialValues.displayName = 'InitialValues'

export default InitialValues
