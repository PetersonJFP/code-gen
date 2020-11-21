import React from "react";
import './app.css'
import InitialValues from './InitialValues'
import PreparePayload from './PreparePayload'
import RequiredFields from './RequiredFields'
import Fields from './Fields'
import CreateIndex from './CreateIndex'
import resource from './resource'
import FormIndex from './FormIndex'
import CreateIndexTest from './CreateIndexTest'
import FormIndexTest from './FormIndexTest'


function App() {
  return (
    <>
      <CreateIndex resource={resource}/>
      <InitialValues fields={resource.fields}/>
      <FormIndex resource={resource}/>
      <FormIndexTest fields={resource.fields}/>
      <Fields fields={resource.fields}/>
      <RequiredFields fields={resource.fields}/>
      <PreparePayload fields={resource.fields}/>
      <CreateIndexTest />
    </>
  );
}

export default App;