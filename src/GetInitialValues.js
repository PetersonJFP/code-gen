import React from 'react'
import {camelCase} from 'lodash'

const GetInitialValues = ({fields}) => {
  const getInitialValue = field => {
    switch (field.inputType) {
      case 'date':
        return `${camelCase(field.name)} ? moment(${camelCase(field.name)}) : null`

      case 'text':
        if (field.subType === 'number') {
          return `${camelCase(field.name)} ? String(${camelCase(field.name)}) : ''`
        }
        return `${camelCase(field.name)} || ''`

      case 'number':
        return `${camelCase(field.name)} ? String(${camelCase(field.name)}) : ''`
  
      default:
        return `${camelCase(field.name)} || ''`
    }
  }
  
  const getInitialValues = `
    export default ({
      ${fields.map(field => 
        `${camelCase(field.name)},`
      ).join('\n')}
    }) => ({
      ${fields.map(field => 
        `${camelCase(field.name)}: ${getInitialValue(field)},`
      ).join('\n')}
    })
  `

  return (
    <>
      <h1>edit/getInitialValues.js</h1>
      <pre>
        {getInitialValues}
      </pre>  
    </>
  );
}

GetInitialValues.displayName = 'GetInitialValues'

export default GetInitialValues
