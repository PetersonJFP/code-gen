import React from "react";
import './app.css'
import InitialValues from './InitialValues'
import PreparePayload from './PreparePayload'
import RequiredFields from './RequiredFields'
import Fields from './Fields'
import CreateIndex from './CreateIndex'
import resource from './resource'
import FormIndex from './FormIndex'


function App() {
  return (
    <>
      {/* <FormIndex resource={resource}/>
      <Fields fields={resource.fields}/>
      <RequiredFields fields={resource.fields}/> */}
      <PreparePayload fields={resource.fields}/>
      {/* <CreateIndex resource={resource}/>
      <InitialValues fields={resource.fields}/> */}
    </>
  );
}

export default App;