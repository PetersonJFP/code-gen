import React from 'react'

const getExpectsList = fields => {
  const expects = []

  fields.forEach(field => {
    switch (field.inputType) {
      case 'date':
        expects.push(`expect(screen.queryAllByText('${field.label}')).toHaveLength(2)`)
        break
  
      default:
        expects.push(`expect(screen.getByLabelText('${field.label}')).toBeInTheDocument()`)
        break
    }
  });

  return expects
}

const fileBody = fields => `
import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Form from '..'

describe('when component is mounted', () => {
  it('show all inputs', async () => {
    render(<Form />)

    ${getExpectsList(fields).join('\n')}
  })
})
`

const FormIndexTest = ({fields}) => {
  return (
    <>
      <h1>form/__tests__/index.test.js</h1>
      <pre>
        {fileBody(fields)}
      </pre>
    </>
  );
}

FormIndexTest.displayName = 'FormIndexTest'

export default FormIndexTest
