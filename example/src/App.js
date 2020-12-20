import React, { Component, createRef } from 'react'

import Form from 'formify-react'
import 'formify-react/dist/index.css'

import { formConstants } from './config'

const budgetData = [
  { value: 5000, label: '$5000' },
  { value: 15000, label: '$15000' },
  { value: 25000, label: '$25000' },
  { value: 35000, label: '$35000' },
  { value: 50000, label: '$50000' }
]

const animalData = [
  { value: 'Bear', label: 'Bear' },
  { value: 'Fox', label: 'Fox' },
  { value: 'Cat', label: 'Cat' },
  { value: 'Dog', label: 'Dog' },
  { value: 'Mouse', label: 'Mouse' }
]

export default class App extends Component {
  formRef = createRef()

  handleSave = () => {
    const { current } = this.formRef
    const form = current.getFormData()
    if (form.isFormValid) {
      console.log(form.formData)
    }
  }

  render() {
    return (
      <div className='container'>
        <Form
          model={formConstants}
          ref={this.formRef}
          data={{ budget: budgetData, animals: animalData }}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}
