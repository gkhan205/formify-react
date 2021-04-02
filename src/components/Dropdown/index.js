import React from 'react'
import PropTypes from 'prop-types'

import mainStyles from '../../styles.module.css'

const Dropdown = ({ value, label, field, data, placeholder, onChange, extraProps }) => {
  const handleChange = (event) => {
    const { value } = event.target
    onChange(value, field)
  }

  return (
    <div className={mainStyles.formGroup}>
      {label && <label htmlFor='app-dropdown-field'>{label}</label>}
      <select
        value={value}
        className={mainStyles.formControl}
        onChange={handleChange}
        {...extraProps}
      >
        <option value=''>{placeholder ? placeholder : 'Select a value'}</option>
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
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  label: PropTypes.string,
  field: PropTypes.string,
  extraProps: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

Dropdown.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  field: '',
  data: [],
  extraProps: {}
}

export default Dropdown
