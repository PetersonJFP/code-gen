import React from 'react'

const getScreen = resource => `
import React from 'react'
import { Fetch } from 'croods'

import Form from './form'
import getInitialValues from './getInitialValues'

export default ({ id }) => {
  return (
    <Fetch id={id} name="${resource.singularName}"${resource.path ? `path={'${resource.path}'}` : ''} render={renderForm(id)} />
  )
}

export const renderForm = id => (
  ${resource.singularName},
  [{ saving, saveError }, { save }],
) => {
  const initialValues = getInitialValues(${resource.singularName})

  return (
    <Form
      id={id}
      save={save}
      saving={saving}
      ${resource.singularName}={${resource.singularName}}
      saveError={saveError}
      initialValues={initialValues}
    />
  )
}

`

const EditIndex = ({resource}) => {
  return (
    <>
      <h1>edit/index.js</h1>
      <pre>
        {getScreen(resource)}
      </pre>
    </>
  );
}

EditIndex.displayName = 'EditIndex'

export default EditIndex
