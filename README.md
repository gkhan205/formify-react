# formify-react

> Last form component you will need for you application which works with only a JSON you pass rest it will handle everything

[![NPM](https://img.shields.io/npm/v/formify-react.svg)](https://www.npmjs.com/package/formify-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Installation](#Install) \
[Usage](#Usage) \
[Props](#Props) \
[Example Form Field](#Model) \
[Form Fields](#Fields) \
[Supported Input Fields](#Supported)

## Install

```bash
npm i -S formify-react
```

## Usage

```jsx
import React, { Component, createRef } from 'react'

import Form from 'formify-react'
import 'formify-react/dist/index.css'

import { formConstants } from './config'

class Example extends Component {
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
      <div>
        <Form model={formConstants} ref={formRef} data={{ budget: [] }} />
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}
```

> `getFormData()` returns an object of {isFormValid, formData}. Same object will be returned if you use `onChange` function to get latest change while you update any field. `getFormData` is only be accessible when you use ref.

## Props

| Property | Description                                                                          | Type      | Default | Required |
| -------- | ------------------------------------------------------------------------------------ | --------- | ------- | -------- |
| model    | Form model array with all fields                                                     | Array     |         | Yes      |
| ref      | Ref to get access to Form DOM Ref                                                    | React Ref |         | No       |
| data     | Object of dropdown data with field name of dropdown field                            | Object    | {}      | No       |
| values   | Object of all fields in forms with values to be populated in form                    | Object    | {}      | No       |
| onChange | This is an optional callback if you need to get form values when an input is changed | Function  |         | No       |

## Model

```
import { Validators } from 'formify-react'

export const formConstants = [
  {
    field: 'email',
    type: 'email',
    validators: [
      { check: Validators.required, message: 'Email is mandatory' },
      { check: Validators.email, message: 'Email entered is not valid' }
    ],
    required: true,
    title: 'Email',
    placeholder: 'Enter your email',
    styleClass: 'col-sm-6',
    extraProps: {
      maxLength: 30
    }
  },
  {
    field: 'budget',
    type: 'dropdown',
    validators: [],
    required: false,
    title: 'Your Budget',
    styleClass: 'col-sm-6'
  },
  {
    field: 'message',
    type: 'textarea',
    validators: [],
    required: false,
    title: 'Message',
    placeholder: 'Enter your message',
    styleClass: 'col-sm-12'
  },
  {
    field: 'notify',
    type: 'checkbox',
    validators: [],
    required: false,
    title: 'Subscribe to our mailing list',
    styleClass: 'col-sm-12'
  }
]
```

## Fields

| Property    | Description                                                                                                                                     | Type                                                                                                   | Default | Required |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------- | -------- |
| field       | This property will be used to identify the input and this will be returned with value which can be used to everywhere. e.g: sending to API Body | string                                                                                                 |         | Yes      |
| type        | Type of input field to generated in Form                                                                                                        | Input Type ['input','textarea','dropdown', 'checkbox', 'email', 'url', 'search', 'number', 'password'] |         | Yes      |
| validators  | Array of validator functions imported from react-dynamic-form                                                                                   | Function                                                                                               | []      | Yes      |
| required    | This field is responsible to mark the field required in form                                                                                    | Boolean                                                                                                | false   | Yes      |
| title       | This field used to display label of the Input Field                                                                                             | String                                                                                                 | ''      | Yes      |
| styleClass  | This field used to do the layout of the fields, you can use your style classes to style inputs                                                  | String                                                                                                 | ''      | No       |
| placeholder | This field used to display placeholder in the field                                                                                             | String                                                                                                 | ''      | No       |
| extraProps  | This field is used to send any extra html attributes to field                                                                                   | Object                                                                                                 | {}      | No       |

## Supported

| Input    | Value      |
| -------- | ---------- |
| Text     | `text`     |
| Email    | `email`    |
| Password | `password` |
| URL      | `url`      |
| Search   | `search`   |
| Number   | `number`   |
| Dropdown | `dropdown` |
| Checkbox | `checkbox` |

> These values will be used in type field of form model

## License

MIT © [gkhan205](https://github.com/gkhan205)
