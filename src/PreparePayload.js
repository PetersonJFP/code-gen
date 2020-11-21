import React from 'react'
import {compact} from 'lodash'

const fileBody = fields => {
  const needPrepare = compact(
    fields.map(field => { 
      if (field.type !== 'text') {
        return field
      }
      return null
    })
  )

  const getNeedPrepareExtractList = () => {
    if (needPrepare.length) {
      return needPrepare.map(field => { 
        return field.name
      })
    }
    return []
  }

  getPreparedReturnList = () => {
    
  }

  return`
    import { formatDate } from 'utils/helpers'

    export default ({
      ${getNeedPrepareExtractList().join('\n')}
      ...payload
    }) => ({
      ...payload,
      
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
