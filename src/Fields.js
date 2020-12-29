import { camelCase } from 'lodash'
import React from 'react'

const genFields = ({type, name, validations}) => 
  `{...fields('${type}', '${camelCase(name)}'${validations ? `, ${validations}` : ''})}`

const input = rows => ({ cols, type, name, label, validations}) => rows.push(`
  <Row className={classes.row}>
    <GridItem ${cols}>
      <Input
        label="${label}"
        ${genFields({type, name, validations})}
      />
    </GridItem> 
  </Row>
`)

const select = rows => ({ cols, type, name, label, validations, options}) => rows.push(`
  <Row className={classes.row}>
    <GridItem ${cols}>
      <Input
        select
        label="${label}"
        ${genFields({type, name, validations})}
      >
        ${options.map(opt =>
          `<MenuItem value="${opt.value}">${opt.label}</MenuItem>`
        ).join('\n')}
      </Input>
    </GridItem> 
  </Row>
`)

const date = rows => ({ cols, type, name, label, validations}) => rows.push(`
  <Row className={classes.row}>
    <GridItem ${cols}>
      <DateInput
        label="${label}"
        ${genFields({type, name, validations})}
      />
    </GridItem>
  </Row>
`)

const fileBody = rows => `
import React from 'react'
import { makeStyles, MenuItem } from '@material-ui/core'

import { presence, validateNumber } from 'forms/validations'
import DateInput from 'forms/DateInput'
import Input from 'forms/Input'

import { Row, GridItem } from 'ui/grid'

const Fields = ({ fields }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      ${rows.join('\n')}
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  row: {
    marginBottom: theme.spacing(1),
  },
}))

Fields.displayName = 'Fields'

export default Fields

`

const Fields = ({fields}) => {
  let rows = []

  fields.forEach((field) => {
    switch (field.inputType) {
      case 'text':
        input(rows)(field)
        break;
      
      case 'select':
        select(rows)(field)
        break;
  
      case 'date':
        date(rows)(field)
        break;
  
      default:
        break;
    }
  })

  return (
    <>
      <h1>form/Fields.js</h1>
      <pre>
        {fileBody(rows)}
      </pre>
    </>
  );
}

Fields.displayName = 'Fields'

export default Fields
