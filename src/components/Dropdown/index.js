import React from 'react'
import PropTypes from 'prop-types'

import mainStyles from '../../styles.module.css'

const Dropdown = ({ value, label, field, data, placeholder, onChange, isMulti }) => {
  const handleChange = (event) => {
    if (isMulti) {
      const { options } = event.target
      const value = []

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) value.push(options[i].value)
      }

      onChange(value, field)
    } else {
      const { value } = event.target
      onChange(value, field)
    }
  }

  return (
    <div className={mainStyles.formGroup}>
      {label && <label htmlFor='app-dropdown-field'>{label}</label>}
      <select
        value={value}
        className={mainStyles.formControl}
        onChange={handleChange}
        multiple={isMulti}
      >
        {
          !isMulti &&
          <option value=''>{placeholder ? placeholder : 'Select a value'}</option>
        }
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholder: PropTypes.string,
  data: PropTypes.array,
  label: PropTypes.string,
  field: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool
}

Dropdown.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  field: '',
  data: [],
  isMulti: false
}

export default Dropdown
