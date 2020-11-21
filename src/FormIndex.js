import React from 'react'
import { capitalize } from 'lodash';

const fileBody = resource => `
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import SubmitButton from 'forms/SubmitButton'
import useForm from 'utils/hooks/useForm'
import FormError from 'forms/FormError'
import { Wrapper, Row } from 'ui'

import requiredFields from './requiredFields'
import preparePayload from './preparePayload'
import Fields from './Fields'


const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(5),
  },
  formWrapper: {
    padding: theme.spacing(4, 2),
  },
  button: {
    display: 'block',
    width: '40%',
    margin: 'auto',
  },
}))

const Form = ({ saveError, saving, onSubmit, initialValues }) => {
  const classes = useStyles()

  const { formState, fields, hasErrors, handleSubmit } = useForm({
    requiredFields,
    preparePayload,
    initialValues,
    onSubmit,
  })

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Row className={classes.title}>
            <Typography variant="h2">Create new ${resource.name}</Typography>
          </Row>

          <Fields fields={fields} formState={formState} />

          <Row>
            <FormError>{saveError}</FormError>
            <SubmitButton
              disabled={hasErrors}
              loading={saving}
              className={classes.button}
            >
              create
            </SubmitButton>
          </Row>
        </Wrapper>
      </form>
    </div>
  )
}

Form.displayName = '${capitalize(resource.name)}Form'

export default Form

`

const FormIndex = ({resource}) => {
  return (
    <>
      <h1>form/index.js</h1>
      <pre>
        {fileBody(resource)}
      </pre>
    </>
  );
}

FormIndex.displayName = 'FormIndex'

export default FormIndex
