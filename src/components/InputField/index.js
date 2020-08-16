import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { validateInput } from '../../utilities/Validator'
import mainStyles from '../../styles.module.css'

const InputField = ({
  value,
  label,
  field,
  placeholder,
  validators,
  type,
  onChange
}) => {
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target
    setError(validateInput(validators, value))
    onChange(value, field, error)
  }

  return (
    <div className={mainStyles.formGroup}>
      {label && <label htmlFor='app-input-field'>{label}</label>}

      {type === 'textarea' ? (
        <textarea
          className={mainStyles.formControl}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          value={value}
          className={mainStyles.formControl}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {error && (
        <span className={mainStyles.inValidMessage}>{error.message}</span>
      )}
    </div>
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  field: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  field: '',
  validators: []
}

export default InputField
