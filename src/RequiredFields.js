import React from 'react'
import {camelCase, compact} from 'lodash'

const RequiredFields = ({fields}) => {
  const isRequired = field => {
    return field.validations ? field.validations.indexOf('presence()') > -1 : false
  }
  
  const requiredFields = `
    export default [
      ${compact(
        fields.map(field => { 
          if (isRequired(field)) {
            return `"${camelCase(field.name)}",`
          }
          return null
        })
      ).join('\n')}
    ]
  `

  return (
    <>
      <h1>form/requiredFields.js</h1>
      <pre>
        {requiredFields}
      </pre>  
    </>
  );
}

RequiredFields.displayName = 'RequiredFields'

export default RequiredFields
