import { camelCase, kebabCase } from 'lodash';
import React from 'react'

/*

[x] criar modelo de objeto que funcionaria para o render
[ ] extrair dos fields uma lista dos campos que precisam de parse

*/

const fileBody = fields => {
  const needParse = []

  fields.forEach(field => {
    switch (field.inputType) {
      case 'date':
        needParse.push({
          name: camelCase(field.name),
          dirty: "'12/20/2010'",
          clean: "'2010-12-20'",
        })
        break

      case 'text':
        if (field.subType === 'number') {
          needParse.push({
            name: camelCase(field.name),
            dirty: "'1234.50'",
            clean: 1234.5,
          })
        } else {
          needParse.push({
            name: camelCase(field.name),
            dirty: `'${kebabCase(field.name)}'`,
            clean: `'${kebabCase(field.name)}'`,
          })
        }
        break
  
      default:
        break
    }    
  });

  return `
import preparePayload from '../preparePayload'

describe('when function is called', () => {
  it('works correctly', () => {
    const dirtyPayload = {
      ${needParse.map(item => 
        `${item.name}: ${item.dirty},`
      ).join('\n')}
    }

    expect(preparePayload(dirtyPayload)).toMatchObject({
      ${needParse.map(item => 
        `${item.name}: ${item.clean},`
      ).join('\n')}
    })
  })
})
`
}

const PreparePayloadTest = ({fields}) => {
  return (
    <>
      <h1>form/__tests__/preparePayload.test.js</h1>
      <pre>
        {fileBody(fields)}
      </pre>
    </>
  );
}

PreparePayloadTest.displayName = 'PreparePayloadTest'

export default PreparePayloadTest
