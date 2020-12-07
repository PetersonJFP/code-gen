import React from 'react'

const fileBody = `
import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Create from '..'

jest.mock('../../form', () => props => (
  <div {...props}>
    <p>Form</p>
    {props.children}
  </div>
))

describe('when component is mounted', () => {
  it('renders correctly', async () => {
    render(<Create />)

    expect(screen.getByText('Form')).toBeInTheDocument()
  })
})
`

const CreateIndexTest = () => {
  return (
    <>
      <h1>create/__tests__/index.test.js</h1>
      <pre>
        {fileBody}
      </pre>
    </>
  );
}

CreateIndexTest.displayName = 'CreateIndexTest'

export default CreateIndexTest
