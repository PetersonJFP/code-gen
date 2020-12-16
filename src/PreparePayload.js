import React from 'react'
import {camelCase, compact} from 'lodash'

const fileBody = fields => {
  const needPrepare = compact(
    fields.map(field => { 
      if (field.type !== 'text' || (field.type === 'text' && field.subType === 'number')) {
        return field
      }
      return null
    })
  )

  const hasFieldsToPrepare = Array.isArray(needPrepare) && needPrepare.length > 0

  const getNeedPrepareExtractList = () => {
    if (needPrepare.length) {
      return needPrepare.map(field => { 
        return camelCase(field.name)
      })
    }
    return []
  }

  
  const getFieldPreparation = field => {
    switch (field.inputType) {
      case 'date':
        return `formatDate(${camelCase(field.name)}, 'YYYY-MM-DD')`

      case 'text':
        if (field.subType === 'number') {
          return `${camelCase(field.name)} ? parseFloat(${camelCase(field.name)}) : null`
        }
        return field.name
  
      default:
        return field.name
    }
  }

  const getPreparedReturnList = () => {
    if (hasFieldsToPrepare) {
      return needPrepare.map(field => { 
        return `${camelCase(field.name)}: ${getFieldPreparation(field)}`
      })
    }
    return []
  }

  return`
    import { formatDate } from 'utils/helpers'

    export default ({
      ${hasFieldsToPrepare ? getNeedPrepareExtractList().join(',\n') + ',\n' : ''}...payload
    }) => ({
      ...payload,${hasFieldsToPrepare ? '\n' + getPreparedReturnList().join(',\n') + ',' : ''}
    })
  `
}

const PreparePayload = ({fields}) => {
  return (
    <>
      <h1>form/preparePayload.js</h1>
      <pre>
        {fileBody(fields)}
      </pre>
    </>
  );
}

PreparePayload.displayName = 'PreparePayload'

export default PreparePayload
