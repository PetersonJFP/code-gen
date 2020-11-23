import React from 'react'
import {capitalize} from 'lodash'

const getScreen = resource => `
import React from 'react'
import { useCroods } from 'croods'
import { useSnackbar } from '@seasonedsoftware/ui'
import { navigate } from '@reach/router'

import initialValues from './initialValues'
import Form from '../form'

const Create = () => {
  const { success } = useSnackbar()

  const [{ saving, saveError }, { save }] = useCroods({
    name: '${resource.name}',${resource.path ? `\n    path: '${resource.path}',` : ''}
    afterSuccess: () => {
      navigate('/${resource.name}'))
      success('${capitalize(resource.singularName)} created successfully')
    },
  })

  return (
    <Form
      onSubmit={save()}
      initialValues={initialValues}
      saveError={saveError}
      saving={saving}
    />
  )
}

export default Create
`

const CreateIndex = ({resource}) => {
  return (
    <>
      <h1>create/index.js</h1>
      <pre>
        {getScreen(resource)}
      </pre>
    </>
  );
}

CreateIndex.displayName = 'CreateIndex'

export default CreateIndex
