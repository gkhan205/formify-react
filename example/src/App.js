import React from 'react'

import Form from 'formify-react'
import 'formify-react/dist/index.css'

import { formConstants } from './config'

const App = () => {
  return <Form model={formConstants} />
}

export default App
