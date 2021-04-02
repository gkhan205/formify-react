import React from 'react'
import PropTypes from 'prop-types'

import mainStyles from '../../styles.module.css'

const Checkbox = ({ label, field, selected, styleClass, onChange, extraProps }) => {
  const handleChange = (event) => {
    const { checked } = event.target
    onChange(checked, field)
  }

  return (
    <div className={mainStyles.formGroup}>
      <label>
        <input
          type='checkbox'
          className='mr-2'
          value={selected}
          defaultChecked={selected}
          onChange={handleChange}
          {...extraProps}
        />

        {label}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  field: PropTypes.string,
  styleClass: PropTypes.string,
  extraProps: PropTypes.object,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  styleClass: '',
  field: '',
  extraProps: {}
}

export default Checkbox
